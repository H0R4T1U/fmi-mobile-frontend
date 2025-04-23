import { useEffect } from "react";
import { useRouter } from "expo-router";
import { CacheManager } from "./utils/CacheManager";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const user = await CacheManager.get("loggedUser");
            setTimeout(() => {
                if (user) {
                    router.replace("/LogIntoNewScreen");
                } else {
                    router.replace("/LoginScreen");
                }
            }, 500);
        };
        checkUser();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
        </View>
    );
}
