import {useEffect, useState} from "react";
import { useRouter } from "expo-router";
import { CacheManager } from "./utils/CacheManager";
import { ActivityIndicator, View } from "react-native";
import {StatusBar} from "expo-status-bar";
import {StripeProvider} from '@stripe/stripe-react-native';
import Constants from "expo-constants";
import { TranslatorProvider } from 'react-native-translator';
import { useFonts } from 'expo-font';
const { PUBLIC_KEY } = Constants.expoConfig.extra;


export default function Index() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold':require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium':require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Black':require('../assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-BlackItalic':require('../assets/fonts/Montserrat-BlackItalic.ttf'),
        'Montserrat-Bold':require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-BoldItalic':require('../assets/fonts/Montserrat-BoldItalic.ttf'),
        'Montserrat-ExtraBold':require('../assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraBoldItalic':require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
        'Montserrat-ExtraLight':require('../assets/fonts/Montserrat-ExtraLight.ttf'),
        'Montserrat-Light':require('../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-MediumItalic':require('../assets/fonts/Montserrat-MediumItalic.ttf'),
        'Montserrat-Thin':require('../assets/fonts/Montserrat-Thin.ttf'),
        'Peddana':require('../assets/fonts/Peddana-Regular.ttf'),
        'Montserrat-Variable':require('../assets/fonts/Merriweather,Montserrat,Peddana/Montserrat/Montserrat-VariableFont_wght.ttf')

    });
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

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <StripeProvider publishableKey={PUBLIC_KEY}>
            <TranslatorProvider>
                <StatusBar style="light" hidden={false}/>
            </TranslatorProvider>
        </StripeProvider>
    );
}
