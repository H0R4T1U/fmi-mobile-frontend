import React, { useEffect, useState } from "react";
import { Button, Dimensions, View, ActivityIndicator } from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import ProfilePageSmallContainer from "../components/ProfilePageSmallContainer";
import ProfilePageLargeContainer from "../components/ProfilePageLargeContainer";
import { useRouter } from "expo-router";
import { CacheManager } from "../utils/CacheManager";

const { height } = Dimensions.get("window");

export default function Profil() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const cachedUser = await CacheManager.get("loggedUser");
            setUser(cachedUser);
            setLoading(false);
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        await CacheManager.remove("loggedUser");
        router.replace("/LoginScreen");
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!user) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title="Go to login" onPress={() => router.replace("/LoginScreen")} />
            </View>
        );
    }

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <FloatingHeader text="PROFIL" />
            <View style={{ alignItems: "center", backgroundColor: "#fff", flex: 1 }}>
                <ProfilePageSmallContainer title="STUDENT" content={user.displayName || "N/A"} />
                <ProfilePageLargeContainer title="CREDENȚIALE" username="PLACEHOLDER" password="PLACEHOLDER" />
                <ProfilePageSmallContainer title="NR. MATRICOL" content="PLACEHOLDER" />
                <ProfilePageSmallContainer title="COD" content="PLACEHOLDER" />
                <View style={{ marginTop: height * 0.1 }}>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
            </View>
        </View>
    );
}
