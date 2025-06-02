import Logo from "../components/login/Logo";
import LoginHeader from "../components/login/LoginHeader";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {useLogin} from "../utils/auth/Login";
import {useRouter} from "expo-router";
import styles from '../utils/styles/login.styles'

export default function LoginScreen() {
    const { loading, error, promptAsync } = useLogin();
    const router = useRouter();

    const buttons = [
        {
            label: "LOGIN WITH MICROSOFT",
            action: () => { promptAsync().catch(err => console.error(err)); },
        },
        {
            label: "CONTINUE AS GUEST",
            action: () => {
                setTimeout(() => {
                    router.navigate('/Cladiri');
                }, 200);
            },
        },
    ];

    return (
        <>
            <LoginHeader/>
            <View style={styles.loginScreenMainView}>
                <View style={styles.promptView}>
                    <Text style={styles.promptText}>HAVEN'T JOINED FMIHUB YET?</Text>
                </View>
                {buttons.map((btn, index) => (
                    <TouchableOpacity key={index} style={styles.buttonStyle} onPress={btn.action}>
                        <Text style={{ color: '#fff' }}>{btn.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Logo/>
        </>
    );
}
