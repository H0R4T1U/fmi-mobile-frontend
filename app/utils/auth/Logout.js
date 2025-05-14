import {useRouter} from "expo-router";
import {useCallback, useState} from "react";
import {CacheManager} from "../CacheManager";

export default function useLogout() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const logout = useCallback(async () => {
        try {
            setLoading(true);
            await CacheManager.clear();
            router.replace("/LoginScreen");
        } catch (err) {
            setError(err.message || "Logout failed");
        } finally {
            setLoading(false);
        }
    }, [router]);

    return { logout, loading, error };
}
