import React, { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import {
    useAuthRequest,
    exchangeCodeAsync,
    ResponseType,
    Prompt, makeRedirectUri,
} from "expo-auth-session";
import { CacheManager } from "../utils/CacheManager";
import { useRouter } from "expo-router";
import LoginHeader from "../components/LoginHeader";
import Logo from "../components/Logo";
import {Text, TouchableOpacity, View} from "react-native";

WebBrowser.maybeCompleteAuthSession();

const azureConfig = {
    clientId: "d302d557-b7f3-4211-b040-58238484f34c",
    tenantId: "5a4863ed-40c8-4fd5-8298-fbfdb7f13095",
    redirectUri: makeRedirectUri({
        native: 'fmihub://Profil'
    }),
    scopes: ["openid", "profile", "email", "User.Read"],
};

const discovery = {
    authorizationEndpoint: `https://login.microsoftonline.com/${azureConfig.tenantId}/oauth2/v2.0/authorize`,
    tokenEndpoint: `https://login.microsoftonline.com/${azureConfig.tenantId}/oauth2/v2.0/token`,
};

export default function LogIntoNewScreen() {
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
            }, 7000);

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
                    console.log(tokenResult)
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
                    console.log(user);
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

    return (
        <>
            <LoginHeader/>
            <View style={{
                alignItems: 'center'
            }}>
                <Text>LOGGING IN AS</Text>
                {/*<Text>{user.}</Text>*/}
                <TouchableOpacity style={{
                    height: height * 0.065,
                    width: width * 0.8,
                    backgroundColor: '#024073',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10
                }}>
                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Montserrat',
                        fontSize: height * 0.015
                    }}>LOG INTO A NEW ACCOUNT</Text>
                </TouchableOpacity>
            </View>
            <Logo/>
        </>
    );
}
