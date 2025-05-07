import React, { useEffect, useState, useCallback } from "react";
import { Text, View, Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import FloatingHeader from "../components/common/FloatingHeader";
import ProfilePageSmallContainer from "../components/profile/ProfilePageSmallContainer";
import ProfilePageLargeContainer from "../components/profile/ProfilePageLargeContainer";
import { useRouter, useFocusEffect } from "expo-router";
import { CacheManager } from "../utils/CacheManager";
import Constants from "expo-constants";
import LoadingView from "../components/common/LoadingView";
import ErrorView from "../components/common/ErrorView";
import useFetch from "../utils/useFetch";

const { BACKEND } = Constants.expoConfig.extra;
const { width, height } = Dimensions.get("window");

export default function Profil() {
    const router = useRouter();
    const [token, setToken] = useState(null);
    const [mail, setMail] = useState(null);
    const [tokenAndMailError, setTokenAndMailError] = useState(null);
    const [tokenAndMailLoading, setTokenAndMailLoading] = useState(false);
    const [logoutLoading, setLogoutLoading] = useState(false);
    const [logoutError, setLogoutError] = useState(null);
    const {data, dataError, dataLoading} = useFetch({token, address : `${BACKEND}/api/students/${mail}`});

    const error = dataError || tokenAndMailError || logoutError;
    const loading = dataLoading || tokenAndMailLoading || logoutLoading;

    useFocusEffect(
        useCallback(() => {
            const fetchTokenAndMail = async () => {
                try {
                    setTokenAndMailLoading(true);
                    const fetchedToken = await CacheManager.get("token");
                    const fetchedUser = await CacheManager.get("loggedUser");
                    setToken(fetchedToken);
                    setMail(fetchedUser.mail);
                } catch (err) {
                    setTokenAndMailError(err.message || "Failed to load credentials");
                } finally {
                    setTokenAndMailLoading(false);
                }
            };
            fetchTokenAndMail();
        }, [])
    );

    const user = data?.studentList[0] || [];

    const handleLogout = async () => {
        try {
            setLogoutLoading(true);
            await CacheManager.clear();
            router.replace("/LoginScreen");
        } catch (err) {
            setLogoutError(err.message || "Logout failed");
        } finally {
            setLogoutLoading(false);
        }
    };

    if (loading)
        return <LoadingView headerText="PROFIL"/>

    if (error)
        return <ErrorView error={error} headerText="PROFIL"/>

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <FloatingHeader text="PROFIL" />
            <View style={{ alignItems: "center", flex: 1 }}>
                <ProfilePageSmallContainer title="STUDENT" content={user?.firstName + ' ' + user?.lastName} />
                <ProfilePageLargeContainer title="CREDENȚIALE" username={user?.username} password={user?.password} />
                <ProfilePageSmallContainer title="NR. MATRICOL" content={user?.number} />
                <ProfilePageSmallContainer title="COD" content={user?.code} />
                <View style={{
                    marginTop: height * 0.03,
                    backgroundColor: '#024073',
                    width: width * 0.5,
                    height: height * 0.06,
                    borderRadius: 10,
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>
                            LOG OUT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
