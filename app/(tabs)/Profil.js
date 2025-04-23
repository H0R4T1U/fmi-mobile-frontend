import React, { useEffect, useState } from "react";
import {Text, Button, Dimensions, View, ActivityIndicator, TouchableOpacity} from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import ProfilePageSmallContainer from "../components/ProfilePageSmallContainer";
import ProfilePageLargeContainer from "../components/ProfilePageLargeContainer";
import { useRouter } from "expo-router";
import { CacheManager } from "../utils/CacheManager";

const { width, height } = Dimensions.get("window");

export default function Profil() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [logoutLoading, setLogoutLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const cachedUser = await CacheManager.get("loggedUser");
            setUser(cachedUser);
            setLoading(false);
        };
        fetchUser();
    }, []);

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/LoginScreen");
        }
    }, [loading, user]);

    const handleLogout = async () => {
        await CacheManager.remove("loggedUser");
        console.log("removed loggedUser", user);
        setUser(null);
        setLogoutLoading(true);
    };

    if (logoutLoading) {
        setTimeout(() => {router.replace("/LoginScreen");}, 2500);
        setTimeout(() => {setLogoutLoading(false);}, 2500);
    }

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <FloatingHeader text="PROFIL" />
            <View style={{ alignItems: "center", backgroundColor: "#fff", flex: 1 }}>
                <ProfilePageSmallContainer title="STUDENT" content={user?.displayName || "N/A"} />
                <ProfilePageLargeContainer title="CREDENȚIALE" username="PLACEHOLDER" password="PLACEHOLDER" />
                <ProfilePageSmallContainer title="NR. MATRICOL" content="PLACEHOLDER" />
                <ProfilePageSmallContainer title="COD" content="PLACEHOLDER" />
                <View style={{
                    marginTop: height * 0.03,
                    backgroundColor: '#024073',
                    width: width * 0.5,
                    height: height * 0.06,
                    borderRadius: 10,
                    shadowColor: "#024073",
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.1,
                    shadowRadius: 0.7,
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            color: '#fff'
                        }}>
                        LOG OUT
                        </Text>
                    </TouchableOpacity>
                </View>
                {logoutLoading ? <ActivityIndicator size={'small'} style={{
                    marginVertical: height * 0.015
                }}/> : <></>}
            </View>
        </View>
    );
}
