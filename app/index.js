import {useEffect, useState} from "react";
import { useRouter } from "expo-router";
import { CacheManager } from "./utils/CacheManager";
import { ActivityIndicator, View } from "react-native";
import {StatusBar} from "expo-status-bar";
import { StripeProvider } from '@stripe/stripe-react-native';
import Constants from "expo-constants";
const { PUBLIC_KEY } = Constants.expoConfig.extra;


export default function Index() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            const user = await CacheManager.get("loggedUser");
            setUser(user);
        };
        checkUser();
    }, []);

    useEffect(() => {
        if (!user) router.replace("/LoginScreen");
    }, [user]);

    return (
        <StripeProvider publishableKey={PUBLIC_KEY}>
            <StatusBar style="light" hidden={false}/>
        </StripeProvider>
    );
}
