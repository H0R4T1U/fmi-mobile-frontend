import {useEffect, useState} from "react";
import {CacheManager} from "./CacheManager";

export default function useToken() {
    const [token, setToken] = useState(null);
    const [tokenError, setTokenError] = useState(null);
    const [tokenLoading, setTokenLoading] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            try {
                setTokenLoading(true);
                const storedToken = await CacheManager.get("token");
                setToken(storedToken);
            } catch (error) {
                console.error("Token retrieval failed:", error);
                setTokenError("Authentication error");
            } finally {
                setTokenLoading(false);
            }
        };
        getToken();
    }, []);

    return {token, tokenError, tokenLoading};
}