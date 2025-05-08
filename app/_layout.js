import React, { useEffect, useState } from "react";
import { CacheManager } from './utils/CacheManager';
import {Slot, Stack} from "expo-router";

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
        <Slot/>
);
}
