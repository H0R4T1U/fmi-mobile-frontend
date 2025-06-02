import {Dimensions, Platform} from "react-native";
import FMIHubHeader from "../components/common/FMIHubHeader";

const {width} = Dimensions.get('window');

export const visibleTabs = [
    {
        name: "Profil",
        icon: require("../../assets/images/icon1_1.png"),
        labelKey: "profile"
    },
    {
        name: "Cladiri",
        icon: require("../../assets/images/icon2_0.png"),
        labelKey: "buildings",
        tabBarItemStyle: { marginRight: width * 0.135 }
    },
    {
        name: "Academic",
        icon: require("../../assets/images/icon3_3.png"),
        labelKey: "academic",
        tabBarItemStyle: { marginLeft: width * 0.135 }
    },
    {
        name: "News",
        icon: require("../../assets/images/icon4_0.png"),
        labelKey: "news"
    }
];

export const hiddenTabs = [
    { name: "HomeScreen" },
    { name: "buildings" },
    { name: "academic" },
    {
        name: "LoginScreen",
        options: {
            headerShown: false,
            tabBarItemStyle: { display: "none" },
            tabBarStyle: { display: "none" }
        }
    },
    {
        name: "Loading",
        options: {
            headerShown: false,
            tabBarItemStyle: { display: "none" },
            tabBarStyle: { display: "none" }
        }
    }
];

export const screenOptions = {
    tabBarStyle: {
        height: Platform.OS === 'android' ? "11.6%" : '12%',
        backgroundColor: "#AEB9C4",
        paddingVertical: 10,
        paddingBottom: 0
    },
    tabBarLabelStyle: {
        display: "none"
    },
    tabBarItemStyle: {
        justifyContent: "center",
        alignItems: "center"
    },
    animation: "shift",
    sceneStyle: {
        backgroundColor: "#fff"
    },
    header: FMIHubHeader,
    tabBarLabelPosition: "beside-icon",
}