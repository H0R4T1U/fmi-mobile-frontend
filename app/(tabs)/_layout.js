import tw from "twrnc";
import {Animated, Dimensions, Image, Platform, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import FMIHubHeader from "../components/common/FMIHubHeader";
import {Tabs, useRouter, useSegments} from "expo-router";
import {StatusBar} from "expo-status-bar";

const {height, width} = Dimensions.get('window');
const buttonWidth =width*0.25;
const buttonHeight = width*0.25;


const tabIconStyles = {
    container: [
        tw`border border-[#024073] shadow-md rounded-full justify-center items-center overflow-hidden`,
        {
            width: width*0.15,
            height: width*0.15,
        }
    ],
    image: [
        tw`mb-2`,
        {
            width: width*0.155,
            height: height*0.1,
        }
    ],
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#024073',
        fontSize: height * 0.015,
        fontFamily: 'Montserrat',
        marginHorizontal: '-60%'
    }
};


export default function Layout() {
    const router = useRouter();
    const segments = useSegments();
    const currentScreen = segments[segments.length - 1];
    const showHomeButton = currentScreen !== "Loading" && currentScreen !== "LoginScreen";
    return (
        <>
            <StatusBar style="light" hidden={false}/>
            <Animated.View style={[tw`flex-1`, { backgroundColor: "#fff" }]}>
                <Tabs
                    screenOptions={{
                        tabBarStyle: {
                            height: Platform.OS==='android' ? '11.6%' : '12%',
                            backgroundColor: "#AEB9C4",
                            paddingVertical: 10,
                            paddingBottom: 0
                        },
                        tabBarLabelStyle: {
                            display: 'none'
                        },
                        tabBarItemStyle: {
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        animation: 'shift',
                        header: FMIHubHeader,
                        sceneStyle: {
                            backgroundColor: '#fff'
                        },
                        tabBarLabelPosition: 'beside-icon',
                    }}>
                    {/* profile button */}
                    <Tabs.Screen name="Profil" options={{
                        tabBarIcon: () => (
                            <View style={{justifyContent: 'center',
                                alignItems: 'center',
                                }}>
                                <View style={tabIconStyles.container}>
                                    <Image source={require('../../assets/images/icon1_1.png')} style={tabIconStyles.image} />
                                </View>
                                <Text style={tabIconStyles.text}>Profil</Text>
                            </View>
                        )
                    }} />

                    {/* buildings button */}
                    <Tabs.Screen name="Clădiri" options={{
                        tabBarIcon: () => (
                            <View style={tw`items-center justify-center`}>
                                <View style={tabIconStyles.container}>
                                    <Image source={require('../../assets/images/icon2_0.png')} style={tabIconStyles.image} />
                                </View>
                                <Text style={tabIconStyles.text}>Clădiri</Text>
                            </View>
                        ),
                        tabBarItemStyle: {
                            marginRight:width*0.135}}}
                    />

                    {/* academic button */}
                    <Tabs.Screen name="Academic" options={{
                        tabBarIcon: () => (
                            <View style={tw`items-center justify-center`}>
                                <View style={tabIconStyles.container}>
                                    <Image source={require('../../assets/images/icon3_3.png')} style={tabIconStyles.image} />
                                </View>
                                <Text style={tabIconStyles.text}>Academic</Text>
                            </View>
                        ),
                        tabBarItemStyle: {
                            marginLeft: width*0.135,
                        }
                    }} />

                    {/* news button */}
                    <Tabs.Screen name="News" options={{
                        tabBarIcon: () => (
                            <View style={tw`items-center justify-center`}>
                                <View style={tabIconStyles.container}>
                                    <Image source={require('../../assets/images/icon4_0.png')} style={tabIconStyles.image} />
                                </View>
                                <Text style={tabIconStyles.text}>News</Text>
                            </View>
                        )
                    }} />
                    <Tabs.Screen name="HomeScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="buildings" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="academic" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="LoginScreen" options={
                        {headerShown:false,
                            tabBarItemStyle:{display: 'none'},
                            tabBarStyle: {
                                display: 'none'
                            }
                        }
                    }/>
                    <Tabs.Screen name="Loading" options={
                        {headerShown:false,
                            tabBarItemStyle:{display: 'none'},
                            tabBarStyle: {
                                display: 'none'
                            }
                        }
                    }/>
                </Tabs>

                {/* home button */}
                {showHomeButton && (
                    <View style={tw`items-center`}>
                        <TouchableOpacity
                            onPress={() => {
                                router.navigate('HomeScreen');
                            }}
                            style={[
                                tw`absolute`,
                                {
                                    bottom: Platform.OS === 'android' ? height * 0.015 : height * 0.03,
                                }
                            ]}
                        >
                            <View style={{
                                backgroundColor: "#fff",
                                borderRadius: buttonWidth,
                                padding: buttonWidth * 0.07,
                                paddingBottom: buttonWidth * 0.08
                            }}>
                                <Image
                                    source={require('../../assets/images/home.png')}
                                    style={[tw`shadow-xl`,{
                                        width: buttonWidth,
                                        height: buttonHeight,
                                        borderRadius: 100,
                                        borderColor: "#fff",
                                        resizeMode: "contain"
                                    }]}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>)}
            </Animated.View>
        </>
    );
}