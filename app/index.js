import { useEffect } from "react";
import { useRouter } from "expo-router";
import { CacheManager } from "./utils/CacheManager";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const user = await CacheManager.get("loggedUser");
            if (user) {
                router.replace("/Profil");
            } else {
                router.replace("/SignInScreen");
            }
        };
        checkUser();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
        </View>
    );
}
