import React, { useEffect, useState } from "react";
import { CacheManager } from './utils/CacheManager';
import { Slot, useRouter, usePathname } from "expo-router";
import { StripeProvider } from "@stripe/stripe-react-native";
import Constants from "expo-constants";
import {ActivityIndicator, Alert, View} from "react-native";
import {useFonts} from "expo-font";

const { PUBLIC_KEY } = Constants.expoConfig.extra;
const PUBLIC_ROUTES=['/LoginScreen', '/Loading', '/News', '/buildings', '/Cladiri', '/']

export default function Layout() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();
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

    const [blockAccess, setBlockAccess] = useState(false);

    useEffect(() => {
        const checkUserAndGuardRoutes = async () => {
            try {
                const token = await CacheManager.get("token");
                const user = token !== null;

                const isPublicRoute = PUBLIC_ROUTES.some(route => {
                    if (route === '/')
                        return pathname === '/';
                    return pathname === route || pathname.startsWith(route + '/');
                });

                const isBlockedPath = !isPublicRoute;

                if (isBlockedPath && !user) {
                    setBlockAccess(true);
                    Alert.alert(
                        `Error`,
                        `You are not authorized to access that page!`,
                        [
                            {
                                text: 'Ok',
                                onPress: () => {
                                    setTimeout(() => {
                                        router.navigate('/LoginScreen');
                                    }, 500);
                                }
                            }
                        ],
                    );
                } else
                    setBlockAccess(false);
            } catch (error) {
                if (pathname !== "/LoginScreen")
                    router.replace("/LoginScreen");
            } finally {
                setIsLoading(false);
            }
        };
        checkUserAndGuardRoutes();
    }, [pathname, router]);

    if (isLoading || !fontsLoaded || blockAccess) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#fff' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <StripeProvider publishableKey={PUBLIC_KEY}>
            <View style={{ flex: 1 }}>
                <Slot />
            </View>
        </StripeProvider>
    );
}