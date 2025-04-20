import React, {useState} from "react";
import Navbar from "../components/Navbar.js";
import {TouchableOpacity, View} from 'react-native';
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from "expo-web-browser";

export default function App() {
    WebBrowser.maybeCompleteAuthSession();

<<<<<<< Updated upstream
        <View style={{flex:1, backgroundColor: '#fff', marginVertical: scaleHeight(47)}}>
=======
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const azureConfig = {
        clientId: 'd302d557-b7f3-4211-b040-58238484f34c',
        tenantId: '5a4863ed-40c8-4fd5-8298-fbfdb7f13095',
        redirectUri: 'fmihub://Home',
        scopes: ['openid', 'profile', 'email', 'User.Read']
    };

    const request = {
        clientId: azureConfig.clientId,
        redirectUri: azureConfig.redirectUri,
        scopes: azureConfig.scopes,
        responseType: AuthSession.ResponseType.Code,
        prompt: AuthSession.Prompt.Login
    };

    const discovery = {
        authorizationEndpoint: `https://login.microsoftonline.com/${azureConfig.tenantId}/oauth2/v2.0/authorize`,
        tokenEndpoint: `https://login.microsoftonline.com/${azureConfig.tenantId}/oauth2/v2.0/token`
    };

    const [authRequest, authResult, promptAsync] = AuthSession.useAuthRequest(
        request,
        discovery
    );
    console.log(azureConfig.redirectUri)

    const signIn = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await promptAsync();

            if (result?.type === 'success') {
                // Exchange code for tokens
                const tokenResult = await AuthSession.exchangeCodeAsync(
                    {
                        clientId: azureConfig.clientId,
                        redirectUri: azureConfig.redirectUri,
                        code: result.params.code,
                        extraParams: {
                            code_verifier: authRequest?.codeVerifier || '',
                        },
                    },
                    discovery
                );

                setAccessToken(tokenResult.accessToken);

                // Fetch user info
                const userInfoResponse = await fetch('https://graph.microsoft.com/v1.0/me', {
                    headers: {Authorization: `Bearer ${tokenResult.accessToken}`}
                });
                const userInfo = await userInfoResponse.json();
                setUser(userInfo);
            }
            // ... rest of your error handling
        } catch (err) {
            // ... error handling
        } finally {
            setLoading(false);
        }
    };

    const signOut = () => {
        setUser(null);
        setAccessToken(null);
    }

    if (user !== null)
    return (
        <View style={{flex:1, backgroundColor: '#fff'}}>
>>>>>>> Stashed changes
            <Navbar/>
        </View>
    );
    else
        return (
            <>
                <TouchableOpacity onPress={signIn} style={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#000',

                }}/>
            </>
        );
}
