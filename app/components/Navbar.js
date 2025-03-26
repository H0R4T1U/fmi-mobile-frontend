import tw from "twrnc";
import ProfileScreen from "../tabs/ProfileScreen";
import {Animated, Image, TouchableOpacity, View} from "react-native";
import BuildingsScreen from "../tabs/BuildingsScreen";
import AcademicScreen from "../tabs/AcademicScreen";
import NewsScreen from "../tabs/NewsScreen";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FMIHubHeader from "./FMIHubHeader";
import {scaleWidth} from "../utils/ScaleFunction";
import {scaleHeight} from "../utils/ScaleFunction";


const buttonWidth = scaleWidth(120);
const buttonHeight = scaleHeight(120);

const tabIconStyles = {
    container: [
        tw`border border-[#024073] shadow-md rounded-full justify-center items-center overflow-hidden`,
        {
            width: scaleWidth(65),
            height: scaleHeight(65),
            marginTop: scaleHeight(32),
        }
    ],
    image: [
        tw`mb-2`,
        {
            width: scaleWidth(96),
            height: scaleHeight(96),
        }
    ]
};


const Tab = createBottomTabNavigator();

export default function Navbar({navigation}) {
    return (
        <>
        <Animated.View style={[tw`flex-1`, { backgroundColor: "#D9D9D9" }]}>
            <View style={{ backgroundColor: "#D9D9D9" }}></View>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        height: scaleHeight(92),
                        backgroundColor: "#AEB9C4"
                    },
                    tabBarLabelStyle: {
                        fontSize: scaleHeight(12),
                        fontFamily: 'Montserrat',
                        paddingTop: scaleHeight(35),
                        color: "#024073"
                    },
                    tabBarLabelPosition: "below-icon",
                    animation: 'fade',
                    headerStyle: {
                        backgroundColor: "#AEB9C4",
                        opacity: 0.49,
                        height: scaleHeight(60),
                    },
                    headerTitle: "",
                    header: FMIHubHeader
                }}
             id={1}>

                {/* profile button */}
                <Tab.Screen name="Profil" component={ProfileScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/profile.png')} style={tabIconStyles.image} />
                        </View>
                    )
                }} />

                {/* buildings button */}
                <Tab.Screen name="Clădiri" component={BuildingsScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/building.png')} style={tabIconStyles.image} />
                        </View>
                    ),
                    tabBarItemStyle: {
                        marginRight: scaleWidth(55)}
                }}
                />

                {/* academic button */}
                <Tab.Screen name="Academic" component={AcademicScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/academic.png')} style={tabIconStyles.image} />
                        </View>
                    ),
                    tabBarItemStyle: {
                        marginLeft: scaleWidth(55)
                    }
                }} />

                {/* news button */}
                <Tab.Screen name="News" component={NewsScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/news.png')} style={tabIconStyles.image} />
                        </View>
                    )
                }} />
            </Tab.Navigator>

            {/* home button */}
            <View style={tw`items-center`}>
                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate('HomeScreen');
                    }}
                    style={[
                        tw`absolute`,
                        {
                            bottom: scaleHeight(25),
                            left: scaleWidth(146),
                            zIndex: 30,
                        }
                    ]}
                >
                    <View style={[tw`shadow-2xl rounded-full bg-white`]}>
                        <Image
                            source={require('../../assets/images/home.png')}
                            style={{
                                width: buttonWidth,
                                height: buttonHeight,
                                borderRadius: buttonWidth / 2,
                                borderColor: "#D9D9D9",
                                borderWidth: 10,
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
        </>
    );
}
