import React, { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { CacheManager } from "../utils/CacheManager";
import LoginHeader from "../components/LoginHeader";
import Logo from "../components/Logo";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
const {width, height} = Dimensions.get('window');
import {useLogin} from "../utils/Login";
WebBrowser.maybeCompleteAuthSession();


export default function LogIntoNewScreen() {
    const [userLoading, setUserLoading] = useState(true);
    const [user, setUser] = useState(null);
    const { loading, error, promptAsync } = useLogin();

    useEffect(() => {
        const loadUser = async () => {
            const cachedUser = await CacheManager.get("loggedUser");
            if (cachedUser) {
                setUser(cachedUser);
            }
            setUserLoading(false);
        };
        loadUser();
    }, []);
    console.log(user);

    return (
        <>
            <LoginHeader/>
            <View style={{
                alignItems: 'center'
            }}>
                <Text>LOGGING IN AS</Text>

                {userLoading ? (
                    <Text>Loading...</Text>
                    ) : user ? (
                    <Text>{user.mail}</Text>
            ) : (
            <Text>No user found</Text>
            )}
                <TouchableOpacity style={{
                    height: height * 0.065,
                    width: width * 0.8,
                    backgroundColor: '#024073',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10
                }} onPress={() => {promptAsync().catch(err => console.error(err))}}>
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
