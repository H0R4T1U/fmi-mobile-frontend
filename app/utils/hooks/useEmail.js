import {useCallback, useState} from "react";
import {useFocusEffect} from "expo-router";
import {CacheManager} from "../CacheManager";

export default function useEmail() {
    const [mail, setMail] = useState(null);
    const [mailError, setMailError] = useState(null);
    const [mailLoading, setMailLoading] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const getEmail = async () => {
                try {
                    setMailLoading(true);
                    const storedUser = await CacheManager.get("loggedUser");
                    setMail(storedUser.mail);
                } catch (error) {
                    setMailError(error);
                } finally {
                    setMailLoading(false);
                }
            };
            getEmail();
        }, [])
    );

    return { mail, mailError, mailLoading };
}
