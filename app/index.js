import { StatusBar } from "expo-status-bar";
import { TranslatorProvider } from 'react-native-translator';
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { CacheManager } from './utils/CacheManager';

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        const checkAuthAndRedirect = async () => {
            try {
                const token = await CacheManager.get("token");
                token ? router.replace('/Profil') : router.replace('/LoginScreen');
            } catch (error) {
                router.replace('/LoginScreen');
            }
        };
        const timer = setTimeout(checkAuthAndRedirect, 100);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <TranslatorProvider>
            <StatusBar style="light" hidden={false} />
        </TranslatorProvider>
    );
}