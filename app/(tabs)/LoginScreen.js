import Logo from "../components/Logo";
import LoginHeader from "../components/LoginHeader";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {useFonts} from "expo-font";
import Login from "../utils/Login";
const {width, height} = Dimensions.get('window');
export default function LoginScreen() {
    useFonts({'Montserrat': require('../../assets/fonts/Montserrat-MediumItalic.ttf')});
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
                        fontFamily: 'Montserrat',
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
                    marginTop: height * 0.015,
                }} onPress={Login()}>
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