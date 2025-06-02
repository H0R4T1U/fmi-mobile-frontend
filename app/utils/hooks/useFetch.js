import {useEffect, useState} from "react";
import {CacheManager} from "../CacheManager";

export default function useFetch({token, address, hasToken}) {
    const [data, setData] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [dataError, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!token && hasToken) return;
                if (!address) return;
                setDataLoading(true);
                const headers = {
                    'Content-Type': 'application/json'
                };

                if (hasToken)
                    headers['Authorization'] = `Bearer ${token}`;

                const response = await fetch(address, {
                    headers: headers
                });

                if (!response.ok)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                const responseData = await response.json();
                responseData ? setData(responseData) : setData([]);
            } catch (dataError) {
                setError(dataError.message);
            } finally {
                setDataLoading(false);
            }
        };
        fetchData();
    }, [token, address]);
    return {data, dataError, dataLoading};
}