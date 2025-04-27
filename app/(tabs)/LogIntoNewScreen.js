import React, { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { CacheManager } from "../utils/CacheManager";
import LoginHeader from "../components/LoginHeader";
import Logo from "../components/Logo";
import {ActivityIndicator, Dimensions, Text, TouchableOpacity, View} from "react-native";
const {width, height} = Dimensions.get('window');
import {useLogin} from "../utils/Login";
import {router} from "expo-router";
WebBrowser.maybeCompleteAuthSession();

export default function LogIntoNewScreen() {
    const [userLoading, setUserLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [shouldLogin, setShouldLogin] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            const cachedUser = await CacheManager.get("loggedUser");
            if (cachedUser) {
                setUser(cachedUser);
                setTimeout(() => {
                    router.replace("/Profil");
                }, 3000);
            }
            setUserLoading(false);
        };
        loadUser();
    }, []);


    const handleLogin = async () => {
        setUser(null);
        const { loading, error, promptAsync } = useLogin();
        promptAsync().catch(err => console.error(err));
    };



    return (
        <>
            <LoginHeader/>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                marginTop: height * 0.2
            }}>
                <Text>LOGGING IN AS</Text>
                {userLoading ? (
                    <Text>Loading...</Text>
                ) : user ? (
                    <Text>{user.mail}</Text>
                ) : (
                    <Text>No user found</Text>
                )}
                <ActivityIndicator size={"large"} style={{
                    marginVertical: height * 0.05
                }}/>
                <TouchableOpacity style={{
                    height: height * 0.065,
                    width: width * 0.8,
                    backgroundColor: '#024073',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10
                }} onPress={ handleLogin
                }>
                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Montserrat',
                        fontSize: height * 0.015,
                        fontWeight: 'bold'
                    }}>LOG INTO A NEW ACCOUNT</Text>
                </TouchableOpacity>
            </View>
            <Logo/>
        </>
    );
}