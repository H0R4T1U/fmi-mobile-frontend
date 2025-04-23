import { useEffect, useState } from "react";
import {exchangeCodeAsync, makeRedirectUri, Prompt, ResponseType, useAuthRequest} from "expo-auth-session";
import { CacheManager } from "./CacheManager";
import Constants from 'expo-constants';
import { useRouter } from "expo-router";
const { CLIENT_ID, TENANT_ID } = Constants.expoConfig.extra;

const azureConfig = {
    clientId: CLIENT_ID,
    tenantId: TENANT_ID,
    redirectUri: makeRedirectUri({
        scheme: 'fmihub',
        path: 'Profil'
    }),
    scopes: ["openid", "profile", "email", "User.Read"],
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
        if (request) {
            const timeout = setTimeout(() => {
                promptAsync().catch(err => {
                    setError(err);
                    setLoading(false);
                });
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [request]);

    useEffect(() => {
        const handleAuth = async () => {
            if (response?.type === "success") {
                const { code } = response.params;
                try {
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
                    const userInfoRes = await fetch("https://graph.microsoft.com/v1.0/me", {
                        headers: { Authorization: `Bearer ${tokenResult.accessToken}` },
                    });

                    const user = await userInfoRes.json();
                    if (user !== null) {
                        await CacheManager.set("loggedUser", user);
                        setTimeout(() => {
                            router.replace('/Profil');
                        }, 500);
                    }
                } catch (err) {
                    setError("Login failed. Please restart the app.");
                    console.error("Auth error:", err);
                } finally {
                    setLoading(false);
                }
            } else if (response?.type === "error" || response?.type === "cancel") {
                setError("Login was cancelled or failed.");
                setLoading(false);
            }
        };
        handleAuth();
    }, [response]);
    return { loading, error, promptAsync };
}
