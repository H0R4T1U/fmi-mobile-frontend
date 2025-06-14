import {useEffect, useState} from "react";
import {exchangeCodeAsync, Prompt, ResponseType, useAuthRequest} from "expo-auth-session";
import {CacheManager} from "../CacheManager";
import Constants from 'expo-constants';
import {useRouter} from "expo-router";
import {Alert} from "react-native";

const { CLIENT_ID, TENANT_ID } = Constants.expoConfig.extra;

const azureConfig = {
    clientId: CLIENT_ID,
    tenantId: TENANT_ID,
    redirectUri: 'exp://127.0.0.1:25242/--/Profil',
    scopes: ["openid", "profile", "email", "api://fmihub-backend/.default"],
};

const discovery = {
    authorizationEndpoint: `https://login.microsoftonline.com/${azureConfig.tenantId}/oauth2/v2.0/authorize`,
    tokenEndpoint: `https://login.microsoftonline.com/${azureConfig.tenantId}/oauth2/v2.0/token`,
};

export function useLogin() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: azureConfig.clientId,
            redirectUri: azureConfig.redirectUri,
            scopes: azureConfig.scopes,
            responseType: ResponseType.Code,
            usePKCE: true,
            extraParams: {
                prompt: __DEV__ ? "consent" : Prompt.SelectAccount,
            },
        },
        discovery
    );

    useEffect(() => {
        const checkExistingLogin = async () => {
            try {
                const token = await CacheManager.get("token");
                const cachedUser = token !== null;
                if (cachedUser)
                    router.replace('/Profil');
            }finally {
                setLoading(false);
            }
        };
        checkExistingLogin();
    }, []);

    useEffect(() => {
        let handled = false;
        const handleAuth = async () => {
            if(handled)
                return;
            handled=true;
            if (response?.type === "success") {
                try {
                    setLoading(true);
                    const { code } = response.params;

                    const tokenResult = await exchangeCodeAsync(
                        {
                            clientId: azureConfig.clientId,
                            code,
                            redirectUri: azureConfig.redirectUri,
                            extraParams: {
                                code_verifier: request?.codeVerifier || "",
                            },
                        },
                        discovery
                    );
                    await CacheManager.set("token", tokenResult.accessToken);
                    await CacheManager.set("language", "ro");
                    console.log(tokenResult.accessToken);
                    router.replace('/Profil');

                } catch (err) {
                    setError("Login failed. Please try again.");
                    Alert.alert("Login Failed", "There was a problem logging in. Please try again.");
                } finally {
                    setLoading(false);
                }
            } else if (response?.type === "error") {
                setError("Login error: " + (response.error?.message || "Unknown error"));
                setLoading(false);
            } else if (response?.type === "cancel") {
                setError("Login was cancelled.");
                setLoading(false);
            }
        };
        if (response) {
            handleAuth();
        }
    }, [response, request?.codeVerifier, router]);
    return { loading, error, promptAsync };
}