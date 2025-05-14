import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import FloatingHeader from "../components/common/FloatingHeader";
import ProfilePageSmallContainer from "../components/profile/ProfilePageSmallContainer";
import ProfilePageLargeContainer from "../components/profile/ProfilePageLargeContainer";
import Constants from "expo-constants";
import LoadingView from "../components/common/LoadingView";
import ErrorView from "../components/common/ErrorView";
import useFetch from "../utils/hooks/useFetch";
import useEmail from "../utils/hooks/useEmail";
import useToken from "../utils/hooks/useToken";
import useLogout from "../utils/auth/Logout";

const { BACKEND } = Constants.expoConfig.extra;
const { width, height } = Dimensions.get("window");

export default function Profil() {
    const { token, tokenError, tokenLoading } = useToken();
    const { mail, mailError, mailLoading } = useEmail();
    const { data, dataError, dataLoading } = useFetch({
        token,
        address: `${BACKEND}/api/students/${mail}`
    });
    const {logout, loading : logoutLoading, error: logoutError} = useLogout();

    const error = dataError || tokenError || mailError || logoutError;
    const loading = dataLoading || tokenLoading || mailLoading || logoutLoading;
    const user = data?.studentList[0] || [];

    // const {data : testData, dataError: testDataError, dataLoading: testDataLoading} = useFetch({
    //     token,
    //     address: `${BACKEND}/api/test`
    //     });
    // console.log("testData",testData);

    if (loading)
        return <LoadingView headerText="PROFIL"/>

    if (error)
        return <ErrorView error={error} headerText="PROFIL"/>

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <FloatingHeader text="PROFIL" />
            <View style={{ alignItems: "center", flex: 1 }}>
                <ProfilePageSmallContainer title="STUDENT" content={user?.firstName + ' ' + user?.lastName} />
                <ProfilePageLargeContainer title="CREDENȚIALE" username={user?.username} password={user?.password} />
                <ProfilePageSmallContainer title="NR. MATRICOL" content={user?.number} />
                <ProfilePageSmallContainer title="COD" content={user?.code} />
                <View style={{
                    marginTop: height * 0.03,
                    backgroundColor: '#024073',
                    width: width * 0.5,
                    height: height * 0.06,
                    borderRadius: 10,
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={logout}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>
                            LOG OUT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
