import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import ProfilePageSmallContainer from "../components/ProfilePageSmallContainer";
import ProfilePageLargeContainer from "../components/ProfilePageLargeContainer";
import { useRouter, useFocusEffect } from "expo-router";
import { CacheManager } from "../utils/CacheManager";
import { useCallback } from "react";

const { width, height } = Dimensions.get("window");

export default function Profil() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [logoutLoading, setLogoutLoading] = useState(false);
    const [refreshCounter, setRefreshCounter] = useState(0);

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

    useFocusEffect(
        useCallback(() => {
            console.log("Profile screen focused - fetching fresh user data");
            setLoading(true);
            fetchUserData();
            return () => {console.log("Profile screen unfocused");};
        }, [fetchUserData, refreshCounter])
    );

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

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
                <ProfilePageSmallContainer title="STUDENT" content={user?.displayName || "N/A"}/>
                <ProfilePageLargeContainer title="CREDENȚIALE" username="PLACEHOLDER" password="PLACEHOLDER"/>
                <ProfilePageSmallContainer title="NR. MATRICOL" content="PLACEHOLDER"/>
                <ProfilePageSmallContainer title="COD" content="PLACEHOLDER"/>
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