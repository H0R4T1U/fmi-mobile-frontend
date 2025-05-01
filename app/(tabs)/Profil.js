import React, { useEffect, useState, useCallback } from "react";
import { Text, View, Dimensions, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import ProfilePageSmallContainer from "../components/ProfilePageSmallContainer";
import ProfilePageLargeContainer from "../components/ProfilePageLargeContainer";
import { useRouter, useFocusEffect } from "expo-router";
import { CacheManager } from "../utils/CacheManager";
import Constants from "expo-constants";

const { BACKEND } = Constants.expoConfig.extra;
const { width, height } = Dimensions.get("window");

export default function Profil() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [logoutLoading, setLogoutLoading] = useState(false);
    const [refreshCounter, setRefreshCounter] = useState(0);
    const [token, setToken] = useState(null);
    const [userInfo, setUserInfo] = useState([]);
    const [error, setError] = useState(null);

    const fetchUserData = useCallback(async () => {
        try {
            const cachedUser = await CacheManager.get("loggedUser", true);
            console.log("Fetched user from cache:", JSON.stringify(cachedUser));
            if (cachedUser && cachedUser.displayName) {
                setUser(cachedUser);
            } else {
                console.log("No valid user data in cache");
                setUser(null);
            }
        } catch (error) {
            console.error("Error fetching user from cache:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchToken = useCallback(async () => {
        try {
            const cachedToken = await CacheManager.get("token", true);
            console.log("Fetched token from cache:", JSON.stringify(cachedToken));
            if (cachedToken) {
                setToken(cachedToken);
            } else {
                console.log("No valid token data in cache");
                setToken(null);
            }
        } catch (error) {
            console.error("Error fetching token from cache:", error);
            setToken(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchProfileData = useCallback(async () => {
        try {
            if (!token) return;

            const cachedUser = await CacheManager.get("loggedUser");
            const userMail = cachedUser.mail;
            setLoading(true);

            const response = await fetch(`${BACKEND}/api/students/${userMail}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            if (responseData._embedded && responseData._embedded.studentList) {
                setUserInfo(responseData._embedded.studentList);
            } else {
                setUserInfo([]);
            }

        } catch (error) {
            console.error("To fetch failed:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useFocusEffect(
        useCallback(() => {
            console.log("Profile screen focused - fetching fresh user data");
            setLoading(true);
            fetchUserData();
            fetchToken();
            return () => { console.log("Profile screen unfocused"); };
        }, [fetchUserData, fetchToken])
    );

    useEffect(() => {
        fetchUserData();
        fetchToken();
    }, []);

    useEffect(() => {
        if (token) {
            fetchProfileData();
        }
    }, [token, fetchProfileData]);

    useEffect(() => {
        if (!loading && !user) {
            console.log("No user found after loading, redirecting to login");
            router.replace("/LoginScreen");
        }
    }, [loading, user, router]);

    const handleLogout = async () => {
        try {
            setLogoutLoading(true);
            await CacheManager.remove("loggedUser");
            await CacheManager.remove("token");
            console.log("Removed user from cache");
            setUser(null);
            setRefreshCounter(prev => prev + 1);
        } catch (error) {
            console.error("Error during logout:", error);
            Alert.alert("Logout Error", "There was a problem logging out. Please try again.");
        } finally {
            setLogoutLoading(false);
        }
    };

    console.log("Rendering profile with user:", user?.displayName);

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <FloatingHeader text="PROFIL" />
            <View style={{ alignItems: "center", backgroundColor: "#fff", flex: 1 }}>
                <ProfilePageSmallContainer title="STUDENT" content={user?.displayName} />
                <ProfilePageLargeContainer title="CREDENȚIALE" username={userInfo[0]?.username} password={userInfo[0]?.password} />
                <ProfilePageSmallContainer title="NR. MATRICOL" content={userInfo[0]?.number} />
                <ProfilePageSmallContainer title="COD" content={userInfo[0]?.code} />
                <View style={{
                    marginTop: height * 0.03,
                    backgroundColor: '#024073',
                    width: width * 0.5,
                    height: height * 0.06,
                    borderRadius: 10,
                    boxShadow: '0px 4px 0.8px #02407315',
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
                {logoutLoading && (
                    <ActivityIndicator
                        size="small"
                        color="#024073"
                        style={{ marginVertical: height * 0.015 }}
                    />
                )}
            </View>
        </View>
    );
}
