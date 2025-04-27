import { useEffect } from "react";
import { useRouter } from "expo-router";
import { CacheManager } from "./utils/CacheManager";
import { ActivityIndicator, View } from "react-native";
import {StatusBar} from "expo-status-bar";
import { StripeProvider } from '@stripe/stripe-react-native';
import Constants from "expo-constants";
const { PUBLIC_KEY } = Constants.expoConfig.extra;


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
        <StripeProvider publishableKey={PUBLIC_KEY}>
        <StatusBar style="light" hidden={false}/>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
        </View>
        </StripeProvider>
    );
}
