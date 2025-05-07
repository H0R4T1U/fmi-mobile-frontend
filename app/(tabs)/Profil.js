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

const { BACKEND } = Constants.expoConfig.extra;
const { width, height } = Dimensions.get("window");

export default function Profil() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [mail, setMail] = useState(null);

    useFocusEffect(
        useCallback(() => {
            const fetchTokenAndMail = async () => {
                try {
                    setLoading(true);
                    const fetchedToken = await CacheManager.get("token");
                    const fetchedUser = await CacheManager.get("loggedUser");

                    setToken(fetchedToken);
                    setMail(fetchedUser.mail);
                } catch (err) {
                    setError(err.message || "Failed to load credentials");
                } finally {
                    setLoading(false);
                }
            };
            fetchTokenAndMail();
        }, [])
    );

    useEffect(() => {
        const fetchProfileData = async () => {
            if (!mail || !token) return;

            try {
                setLoading(true);
                const response = await fetch(`${BACKEND}/api/students/${mail}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                setUser(data._embedded.studentList[0]);
            } catch (err) {
                console.error("Profile fetch failed:", err);
                setError(err.message || "Could not load profile");
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [mail, token]);

    const handleLogout = async () => {
        try {
            setLoading(true);
            await CacheManager.remove("token");
            await CacheManager.remove("loggedUser");
            router.replace("/LoginScreen");
        } catch (err) {
            setError(err.message || "Logout failed");
        } finally {
            setLoading(false);
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
