import {useEffect, useState} from "react";
import {CacheManager} from "./CacheManager";

export default function useEmail() {
    const [mail, setMail] = useState(null);
    const [mailError, setMailError] = useState(null);
    const [mailLoading, setMailLoading] = useState(null);

    useEffect(() => {
        const getEmail = async () => {
            try {
                setMailLoading(true);
                const storedMail = await CacheManager.get("loggedUser");
                setMail(storedMail.mail);
            } catch (error) {
                console.error("Token retrieval failed:", error);
                setMailError("Authentication error");
            } finally {
                setMailLoading(false);
            }
        };
        getEmail();
    }, []);

    return {mail, mailError, mailLoading};
}