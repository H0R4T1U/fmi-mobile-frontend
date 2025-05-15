import FloatingHeader from "../components/common/FloatingHeader";
import NewsContainer from "../components/news/NewsContainer";
import {ActivityIndicator, Dimensions, FlatList, View} from "react-native";
import Constants from "expo-constants";
import useToken from "../utils/hooks/useToken";
import LoadingView from "../components/common/LoadingView";
import ErrorView from "../components/common/ErrorView";
import useFetch from "../utils/hooks/useFetch";

const { BACKEND } = Constants.expoConfig.extra;
const {height} = Dimensions.get('window');

export default function News() {
    const {token, tokenError, tokenLoading} = useToken();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address: `${BACKEND}/api/news/ro`
    });

    console.log(data);

    const loading = tokenLoading || dataLoading;
    const error = tokenError || dataError;

    if (loading)
        return <LoadingView headerText="NEWS"/>;

    if (error)
        return <ErrorView error={error} headerText="NEWS"/>

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
                data={data || []}
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