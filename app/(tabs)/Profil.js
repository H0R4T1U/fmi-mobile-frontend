import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import FloatingHeader from "../components/common/FloatingHeader";
import ProfilePageSmallContainer from "../components/profile/ProfilePageSmallContainer";
import ProfilePageLargeContainer from "../components/profile/ProfilePageLargeContainer";
import Constants from "expo-constants";
import LoadingView from "../components/common/LoadingView";
import ErrorView from "../components/common/ErrorView";
import useFetch from "../utils/hooks/useFetch";
import useToken from "../utils/hooks/useToken";
import useLogout from "../utils/auth/Logout";
import LanguageSwitcher from "../utils/LanguageSwitcher";
import { useTranslation } from 'react-i18next';


const { BACKEND } = Constants.expoConfig.extra;
const { width, height } = Dimensions.get("window");


export default function Profil() {
    const {t}=useTranslation();
    const { token, tokenError, tokenLoading } = useToken();
    const { data, dataError, dataLoading } = useFetch({
        token,
        address: `${BACKEND}/api/students`
    });
    const {logout, loading : logoutLoading, error: logoutError} = useLogout();

    const error = dataError || tokenError || logoutError;
    const loading = dataLoading || tokenLoading || logoutLoading;

    const user = Array.isArray(data) && data.length > 0 ? data[0] : {};

    if (loading)
        return <LoadingView headerText={t("profile")}/>

    if (error)
        return <ErrorView error={error} headerText={t("profile")}/>




    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>

            <FloatingHeader text={t("profile")} />
            <View style={{ alignItems: "center", flex: 1 }}>
                <ProfilePageSmallContainer title={t("student")} content={user?.firstName + ' ' + user?.lastName} />
                <ProfilePageLargeContainer title={t("credentials")} username={user?.username} password={user?.password} />
                <ProfilePageSmallContainer title={t("number")} content={user?.number} />
                <ProfilePageSmallContainer title={t("code")} content={user?.code} />
                <View style={{
                    marginTop: height * 0.03,
                    backgroundColor: '#024073',
                    width: width * 0.5,
                    height: height * 0.06,
                    borderRadius: 10,
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={logout}>
                        <Text style={{ textAlign: 'center', color: '#fff',fontWeight:"600",}}>
                            {t('logout')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    alignItems:"flex-start"
                }}>
                    <LanguageSwitcher></LanguageSwitcher>
                </View>
            </View>
        </View>
    );
}
