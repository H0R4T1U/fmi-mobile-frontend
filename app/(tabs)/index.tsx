import ProfileScreen from "@/app/(tabs)/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BuildingScreen from "@/app/(tabs)/BuildingScreen";
import AcademicScreen from "@/app/(tabs)/AcademicScreen";
import NewsScreen from "@/app/(tabs)/NewsScreen";
import {Animated, Image, TouchableOpacity} from 'react-native';
import React from "react";
import View = Animated.View;
import tw from 'twrnc'

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
console.log(width, height);

const scale = (size: number) => {
    const guidelineBaseWidth = 411;
    const scaleFactor = width / guidelineBaseWidth;
    const normalizedSize = size * scaleFactor;
    return Math.round(normalizedSize);
};

const buttonWidth = scale(120)
const buttonHeight = scale(120)

const tabIconStyles = {
    container: [
        tw`border border-[#024073] rounded-full justify-center items-center overflow-hidden`,
        {
            width: scale(68),
            height: scale(68),
            marginTop: scale(36)
        }
    ],
    image: [
        tw`mb-2`,
        {
            width: scale(96),
            height: scale(96)
        }
    ]
};

const handleHomePress = () => {

}


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <View style={[tw`flex-1`, {backgroundColor: "#D9D9D9"}]}>
        <View style={{backgroundColor: "#D9D9D9"}}>
        </View>
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: height * 0.11,
                    backgroundColor: "#AEB9C4"
                },
                tabBarLabelStyle: {
                    fontSize: scale(13),
                    fontFamily: 'Montserrat',
                    paddingTop: scale(37),
                    color: "#024073"
                },
            tabBarLabelPosition: "below-icon",
            animation: 'fade',
        }}>
            <Tab.Screen name="Profil" component={ProfileScreen} options=
                {{tabBarIcon: () => (
                            <View style={tabIconStyles.container}>
                                <Image source={require('@/FMIhub/profile.png')}
                                        style={tabIconStyles.image}/>
                            </View>)}}/>
            <Tab.Screen name="Clădiri" component={BuildingScreen} options=
                {{tabBarIcon: () => (
                            <View style={tabIconStyles.container}>
                                <Image source={require('@/FMIhub/building.png')}
                                       style={tabIconStyles.image}/>
                            </View>),
                            tabBarItemStyle:{
                            marginRight: scale(55)
                }}}/>
            <Tab.Screen name="Academic" component={AcademicScreen} options=
                {{tabBarIcon: () => (
                            <View style={tabIconStyles.container}>
                                <Image source={require('@/FMIhub/academic.png')}
                                       style={tabIconStyles.image}/>
                            </View>),
                            tabBarItemStyle:{
                                marginLeft: scale(55)
                            }}}/>
            <Tab.Screen name="Știri" component={NewsScreen} options=
                        {{tabBarIcon: () => (
                            <View style={tabIconStyles.container}>
                                <Image source={require('@/FMIhub/news.png')}
                                       style={tabIconStyles.image}/>
                            </View>)}}/>
        </Tab.Navigator>
        <View style={tw`items-center`}>
            <TouchableOpacity
                onPress={handleHomePress}
                style={[
                    tw`absolute`,
                    {
                        bottom: scale(40),
                        left: scale(146),
                        zIndex: 30,
                    }
                ]}
            >
                <View style={[tw`shadow-2xl rounded-full bg-white`]}>
                    <Image
                        source={require('@/FMIhub/home.png')}
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
        </View>
    )
}
