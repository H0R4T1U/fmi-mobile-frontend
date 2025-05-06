import FloatingHeader from "../components/common/FloatingHeader";
import React, { useState, useEffect } from "react";
import NewsContainer from "../components/news/NewsContainer";
import {Text, FlatList, Dimensions, ActivityIndicator, View} from "react-native";
import { CacheManager } from "../utils/CacheManager";
import Constants from "expo-constants";
const { BACKEND } = Constants.expoConfig.extra;
const {height} = Dimensions.get('window');

export default function News() {
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            try {
                const storedToken = await CacheManager.get("token");
                setToken(storedToken);
            } catch (error) {
                console.error("Token retrieval failed:", error);
                setError("Authentication error");
            }
        };
        getToken();
    }, []);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                if (!token) return;

                setLoading(true);
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
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (token) fetchNews();
    }, [token]);

    if (loading)
        return (
            <>
                <FloatingHeader text="NEWS"/>
                <ActivityIndicator size="small" style={{
                    flex: 1
                }}/>
            </>
        );
    if (error)
        return (
            <>
                <FloatingHeader text="EXAMENE"/>
                <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#024073', fontFamily: 'Montserrat', fontSize: height * 0.015, textAlign: 'center', textAlignVertical: 'center'}}>{error}. Please try again later.</Text>
                </View>
            </>
        );

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