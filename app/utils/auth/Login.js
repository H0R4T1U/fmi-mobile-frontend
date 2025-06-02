import { useEffect, useState } from "react";
import { exchangeCodeAsync, Prompt, ResponseType, useAuthRequest } from "expo-auth-session";
import {CacheManager as Cachemanager, CacheManager} from "../CacheManager";
import Constants from 'expo-constants';
import { useRouter } from "expo-router";
import { Alert } from "react-native";

const { CLIENT_ID, TENANT_ID } = Constants.expoConfig.extra;

const azureConfig = {
    clientId: CLIENT_ID,
    tenantId: TENANT_ID,
    redirectUri: 'exp://127.0.0.1:25242/--/Profil',
    scopes: ["openid", "profile", "email", "api://fmihub-backend/.default", "offline_access"],
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

    const refreshAccessToken = async () => {
        try {
            const refreshToken = await CacheManager.get("refresh_token");

            const params = new URLSearchParams();
            params.append("grant_type", "refresh_token");
            params.append("client_id", azureConfig.clientId);
            params.append("refresh_token", refreshToken);
            params.append("scope", azureConfig.scopes.join(" "));

            const response = await fetch(discovery.tokenEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error_description || "Token refresh failed");

            await CacheManager.set("token", data.access_token);
            await CacheManager.set("refresh_token", data.refresh_token || refreshToken);
            await CacheManager.set("expires_at", `${Date.now() + data.expires_in * 1000}`);

            return data.access_token;
        } catch (err) {
            console.error("Token refresh failed:", err);
            return null;
        }
    };

    useEffect(() => {
        const checkExistingLogin = async () => {
            try {
                const accessToken = await CacheManager.get("token");
                const refreshToken = await CacheManager.get("refresh_token");
                const expiresAt = await CacheManager.get("expires_at");

                if (accessToken && refreshToken) {
                    const now = Date.now();
                    if (!expiresAt || now >= parseInt(expiresAt)) {
                        const newToken = await refreshAccessToken();
                        if (newToken)
                            router.replace("/Profil");
                    } else
                        router.replace("/Profil");
                }
            } catch (err) {
                console.error("Error checking login:", err);
            } finally {
                setLoading(false);
            }
        };
        checkExistingLogin();
    }, []);

    useEffect(() => {
        let handled = false;
        const handleAuth = async () => {
            if (handled || !response) return;
            handled = true;

            if (response.type === "success") {
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
                    console.log(tokenResult);

                    await CacheManager.set("token", tokenResult.accessToken);
                    await CacheManager.set("refresh_token", tokenResult.refreshToken);
                    await CacheManager.set("expires_at", `${Date.now() + tokenResult.expiresIn * 1000}`);
                    await CacheManager.set("language", "ro");
                    router.replace("/Profil");
                } catch (err) {
                    setError("Login failed. Please try again.");
                    Alert.alert("Login Failed", "There was a problem logging in. Please try again.");
                } finally {
                    setLoading(false);
                }
            } else if (response.type === "error") {
                setError("Login error: " + (response.error?.message || "Unknown error"));
                setLoading(false);
            } else if (response.type === "cancel") {
                setError("Login was cancelled.");
                setLoading(false);
            }
        };

        handleAuth();
    }, [response, request?.codeVerifier, router]);

    return { loading, error, promptAsync };
}
