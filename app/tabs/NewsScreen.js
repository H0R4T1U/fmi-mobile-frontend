import FloatingHeader from "../components/FloatingHeader";
import React, { useState, useCallback } from "react";
import NewsContainer from "../components/NewsContainer";
import { FlatList, ActivityIndicator, View } from "react-native";

export default function NewsScreen() {
    const [newsData, setNewsData] = useState([
        { id: '1', title: "TITLUL ANUNTULUI 1", description: "Descrierea anuntului" },
        { id: '2', title: "TITLUL ANUNTULUI 2", description: "Descrierea anuntului" },
        { id: '3', title: "TITLUL ANUNTULUI 3", description: "Descrierea anuntului" },
    ]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchMoreNews = useCallback(async () => {
        if (loading) return;
        setLoading(true);

        try {
            const newItems = Array.from({ length: 3 }, (_, i) => ({
                id: `${newsData.length + i + 1}`,
                title: `TITLUL ANUNTULUI ${newsData.length + i + 1}`,
                description: "Descrierea anuntului"
            }));

            setNewsData(prev => [...prev, ...newItems]);
            setPage(prev => prev + 1);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    }, [loading, newsData]);

    return (
        <>
            <FloatingHeader text="NEWS" />
            <FlatList
                data={newsData}
                renderItem={({ item }) => (
                    <NewsContainer
                        title={item.title}
                        description={item.description}
                    />
                )}
                keyExtractor={(item) => item.id}
                onEndReached={fetchMoreNews}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    loading ? (
                        <View style={{ paddingVertical: 20 }}>
                            <ActivityIndicator size="large" color="#024073" />
                        </View>
                    ) : null
                }
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </>
    );
}