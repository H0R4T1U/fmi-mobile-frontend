import FloatingHeader from "../components/common/FloatingHeader";
import NewsContainer from "../components/news/NewsContainer";
import {FlatList, View} from "react-native";
import Constants from "expo-constants";
import useToken from "../utils/hooks/useToken";
import LoadingView from "../components/common/LoadingView";
import ErrorView from "../components/common/ErrorView";
import useFetch from "../utils/hooks/useFetch";
import style from "../utils/styles/tabs.styles";
import { useTranslation } from 'react-i18next';

const { BACKEND } = Constants.expoConfig.extra;

export default function News() {
    const {t} = useTranslation();
    const {token, tokenError, tokenLoading} = useToken();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address: `${BACKEND}/api/news/ro`,
        hasToken: true
    });

    const loading = tokenLoading || dataLoading;
    const error = tokenError || dataError;

    if (loading)
        return <LoadingView headerText={t("news").toString().toUpperCase()}/>;

    if (error)
        return <ErrorView error={error} headerText={t("news").toString().toUpperCase()}/>

    return (
        <View style={style.mainView}>
            <FloatingHeader text={t("news").toString().toUpperCase()}/>
            <FlatList
                data={data || []}
                renderItem={({ item }) => (
                    <NewsContainer date={item.date} title={item.title} link={item.location}/>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={style.contentContainerView}
            />
        </View>
    );
}