import {Text, TouchableOpacity, View} from "react-native";
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
import styles from '../utils/styles/tabs.styles';
const { BACKEND } = Constants.expoConfig.extra;

export default function Profil() {
    const {t}=useTranslation();
    const { token, tokenError, tokenLoading } = useToken();
    const { data, dataError, dataLoading } = useFetch({
        token,
        address: `${BACKEND}/api/students`,
        hasToken: true
    });
    const {logout, loading : logoutLoading, error: logoutError} = useLogout();

    const error = dataError || tokenError || logoutError;
    const loading = dataLoading || tokenLoading || logoutLoading;

    const user = Array.isArray(data) && data.length > 0 ? data[0] : {};

    if (loading)
        return <LoadingView headerText={t("profile").toString().toUpperCase()}/>

    if (error)
        return <ErrorView error={error} headerText={t("profile").toString().toUpperCase()}/>

    return (
        <View style={styles.mainView}>
            <FloatingHeader text={t("profile").toString().toUpperCase()} />
            <View style={styles.profileMainView}>
                <ProfilePageSmallContainer title={t("student")} content={user?.firstName + ' ' + user?.lastName} />
                <ProfilePageLargeContainer title={t("credentials")} username={user?.username} password={user?.password} />
                <ProfilePageSmallContainer title={t("number")} content={user?.number} />
                <ProfilePageSmallContainer title={t("code")} content={user?.code} />
                <View style={styles.profileLogoutButtonView}>
                    <TouchableOpacity onPress={logout}>
                        <Text style={styles.profileLogoutButtonText}>
                            {t('logout')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileLanguageSwitcher}>
                    <LanguageSwitcher/>
                </View>
            </View>
        </View>
    );
}
