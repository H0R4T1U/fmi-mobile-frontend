import React, {useEffect, useState} from "react";
import {CacheManager} from './utils/CacheManager';
import {Slot} from "expo-router";
import {StripeProvider} from "@stripe/stripe-react-native";
import Constants from "expo-constants";
const { PUBLIC_KEY } = Constants.expoConfig.extra;


export default function Layout() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const user = await CacheManager.get("loggedUser");
            setIsLoggedIn(!!user);
            setIsLoading(false);
        };

        checkUser();
    }, []);


    if (isLoading) return null;

    return (
        <StripeProvider publishableKey={PUBLIC_KEY}>
        <Slot/>
        </StripeProvider>
);
}
