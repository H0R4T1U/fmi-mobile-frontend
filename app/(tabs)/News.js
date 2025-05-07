import FloatingHeader from "../components/common/FloatingHeader";
import React, { useState, useEffect } from "react";
import NewsContainer from "../components/news/NewsContainer";
import {FlatList, Dimensions} from "react-native";
import Constants from "expo-constants";
import useToken from "../utils/useToken";
import LoadingView from "../components/common/LoadingView";
import ErrorView from "../components/common/ErrorView";
const { BACKEND } = Constants.expoConfig.extra;
const {height} = Dimensions.get('window');

export default function News() {
    const [news, setNews] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
    const [newsError, setNewsError] = useState(null);
    const {token, tokenError, tokenLoading} = useToken();

    const loading = tokenLoading || newsLoading;
    const error = tokenError || newsError;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                console.log(token);
                if (tokenLoading || !token) return;

                setNewsLoading(true);
                const response = await fetch(`${BACKEND}/api/news/ro`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                setNews(responseData._embedded.newsList);

            } catch (error) {
                console.error("News fetch failed:", error);
                setNewsError(error.message);
            } finally {
                setNewsLoading(false);
            }
        };
        fetchNews();
    }, [token, tokenLoading]);

    if (loading)
        return <LoadingView headerText="NEWS"/>;

    if (error)
        return <ErrorView error={error} headerText="NEWS"/>

    return (
        <>
            <FloatingHeader text="NEWS" />
            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <NewsContainer date={item.date} title={item.title} link={item.location}/>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    paddingBottom: height * 0.08,
                    flexGrow: 1,
                }}
            />
        </>
    );
}