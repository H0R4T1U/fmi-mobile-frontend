import {useEffect, useState} from "react";

export default function useFetch({token, address}) {
    const [data, setData] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [dataError, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!token) return;
                setDataLoading(true);
                // console.log('before fetching from address', address)
                const response = await fetch(address, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                console.log('after fetch')
                // console.log(response)
                // console.log(response.ok)
                // console.log(response.status)
                if (!response.ok)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                const responseData = await response.json();
                // console.log(responseData);
                responseData._embedded ? setData(responseData._embedded) : setData([]);
            } catch (dataError) {
                setError(dataError.message);
            } finally {
                setDataLoading(false);
            }
        };
        fetchData();
    }, [token]);
    return {data, dataError, dataLoading};
}