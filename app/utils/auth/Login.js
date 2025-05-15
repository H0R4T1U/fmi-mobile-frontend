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
                await CacheManager.clear();
                const cachedUser = await CacheManager.get("loggedUser");
                if (cachedUser && cachedUser.displayName) {
                    router.replace('/Profil');
                }
            } catch (error) {
                console.error("Error checking existing login:", error);
            } finally {
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
                    console.log(tokenResult.accessToken);

                    const userInfoRes = await fetch("https://graph.microsoft.com/v1.0/me", {
                        headers: { Authorization: `Bearer ${tokenResult.accessToken}` },
                    });

                    const userData = await userInfoRes.json();

                    if (userData && userData.displayName) {
                        console.log("Login successful, user data:", JSON.stringify(userData));
                        await CacheManager.remove("loggedUser");
                        await CacheManager.set("loggedUser", userData);
                        const verifyUser = await CacheManager.get("loggedUser");
                        console.log("Verified stored user:", JSON.stringify(verifyUser));
                        router.replace('/Profil');
                    } else {
                        throw new Error("Invalid user data received");
                    }
                } catch (err) {
                    console.error("Auth error:", err);
                    setError("Login failed. Please try again.");
                    Alert.alert("Login Failed", "There was a problem logging in. Please try again.");
                } finally {
                    setLoading(false);
                }
            } else if (response?.type === "error") {
                console.error("Auth error:", response.error);
                setError("Login error: " + (response.error?.message || "Unknown error"));
                setLoading(false);
            } else if (response?.type === "cancel") {
                console.log("Auth cancelled by user");
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