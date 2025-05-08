import {useCallback, useState} from "react";
import {useFocusEffect} from "expo-router";
import {CacheManager} from "../CacheManager";

export default function useToken() {
    const [token, setToken] = useState(null);
    const [tokenError, setTokenError] = useState(null);
    const [tokenLoading, setTokenLoading] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const getToken = async () => {
                try {
                    setTokenLoading(true);
                    const storedToken = await CacheManager.get("token");
                    setToken(storedToken);
                } catch (error) {
                    setTokenError(error);
                } finally {
                    setTokenLoading(false);
                }
            };
            getToken();
        }, [])
    );

    return { token, tokenError, tokenLoading };
}
