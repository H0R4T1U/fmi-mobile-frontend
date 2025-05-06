import Logo from "../components/login/Logo";
import LoginHeader from "../components/login/LoginHeader";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {useLogin} from "../utils/Login";
const {width, height} = Dimensions.get('window');
export default function LoginScreen() {
    const { loading, error, promptAsync } = useLogin();
    return (
        <>
            <LoginHeader/>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: height * 0.7
            }}>
                <View style={{
                    width: width * 0.4,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-MediumItalic',
                        fontSize: height * 0.022,
                        textAlign: 'center',
                        fontStyle: 'italic',
                    }}>HAVEN'T JOINED FMIHUB YET?
                    </Text>
                </View>
                <TouchableOpacity style={{
                    height: height * 0.065,
                    width: width * 0.65,
                    backgroundColor: '#024073',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: height * 0.025,
                }} onPress={() => {promptAsync().catch(err => console.error(err))}}>
                    <Text style={{
                        color: '#fff'
                    }}>
                        LOGIN WITH MICROSOFT
                    </Text>
                </TouchableOpacity>
            </View>
            <Logo/>
        </>
    )
}