import FloatingHeader from "../components/common/FloatingHeader";
import NewsContainer from "../components/news/NewsContainer";
import {FlatList, View, Text} from "react-native";
import Constants from "expo-constants";
import useToken from "../utils/hooks/useToken";
import LoadingView from "../components/common/LoadingView";
import ErrorView from "../components/common/ErrorView";
import useFetch from "../utils/hooks/useFetch";
import style from "../utils/styles/tabs.styles";
import { useTranslation } from 'react-i18next';
import {CacheManager} from "../utils/CacheManager";
import {useCallback, useState} from "react";
import {useFocusEffect} from "expo-router";

const { BACKEND } = Constants.expoConfig.extra;

export default function News() {
    const {t} = useTranslation();
    const {token, tokenError, tokenLoading} = useToken();
    const [language, setLanguage] = useState("");
    const [languageLoading, setLanguageLoading] = useState(false);

    useFocusEffect(
        useCallback(() => {
            async function fetchLang() {
                setLanguageLoading(true);
                const lang = await CacheManager.get("language");
                        setLanguage(lang);
                setLanguageLoading(false);
            }
            fetchLang();
        }, [])
    );

    const {data, dataError, dataLoading} = useFetch({
        token,
        address: `${BACKEND}/api/news/${language}`,
        hasToken: true
    });

    const loading = tokenLoading || dataLoading || languageLoading;
    const error = tokenError || dataError;

    if (loading)
        return <LoadingView headerText={t("news").toString().toUpperCase()} />;

    if (error)
        return <ErrorView error={error} headerText={t("news").toString().toUpperCase()} />;

    if (!data || data.length === 0) {
        return (
            <View style={style.mainView}>
                <FloatingHeader text={t("news").toString().toUpperCase()} />
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                    {"There are no news"}
                </Text>
            </View>
        );
    }

    return (
        <View style={style.mainView}>
            <FloatingHeader text={t("news").toString().toUpperCase()} />
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <NewsContainer
                        date={item.date}
                        title={item.title.length > 120 ? item.title.slice(0, 120).concat('...') : item.title}
                        link={item.location}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={style.contentContainerView}
            />
        </View>
    );


}