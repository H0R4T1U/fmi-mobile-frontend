import LoginHeader from "../components/login/LoginHeader";
import Logo from "../components/login/Logo";
import {ActivityIndicator} from "react-native";

export default function Loading() {
    return (
    <>
        <LoginHeader/>
        <ActivityIndicator size="small" style={{flex: 1}}/>
        <Logo/>
    </>
    );
}