import {useEffect, useState} from "react";
import {CacheManager} from "../CacheManager";

export default function useFetch({token, address, hasToken}) {
    const [data, setData] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [dataError, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("before ")
                if (!token && hasToken) return;
                if (!address) return;
                console.log("after");
                setDataLoading(true);
                // console.log('before fetching from address', address)
                const headers = {
                    'Content-Type': 'application/json'
                };

                if (hasToken) {
                    headers['Authorization'] = `Bearer ${token}`;
                }

                const response = await fetch(address, {
                    headers: headers
                });

                console.log('after fetch')
                console.log(response)
                // console.log(response.ok)
                // console.log(response.status)
                if (!response.ok)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                const responseData = await response.json();
                console.log("before set data", responseData);
                responseData ? setData(responseData) : setData([]);
                console.log(responseData);
                if (responseData[0] && responseData[0].email && await CacheManager.get("loggedUser") != null)
                    await CacheManager.set("loggedUser", responseData[0].email);
                // console.log(responseData)
            } catch (dataError) {
                console.log(dataError.message);
                setError(dataError.message);
            } finally {
                setDataLoading(false);
            }
        };
        fetchData();
    }, [token, address]);
    return {data, dataError, dataLoading};
}