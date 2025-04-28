import tw from "twrnc";
import {Text, Animated, Platform, Dimensions, Image, TouchableOpacity, View} from "react-native";
import React from "react";
import FMIHubHeader from "../components/FMIHubHeader";
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
            // marginTop: height * 0.04
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
    const showHomeButton = currentScreen !== "LogIntoNewScreen" && currentScreen !== "LoginScreen";
    return (
        <>
            <StatusBar style="light" hidden={false}/>
            <Animated.View style={[tw`flex-1`, { backgroundColor: "#fff" }]}>
                <Tabs
                    screenOptions={{
                        tabBarStyle: {
                            height: '11.6%',
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
                                height: '100%',}}>
                                <View style={tabIconStyles.container}>
                                    <Image source={require('../../assets/images/profile.png')} style={tabIconStyles.image} />
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
                                    <Image source={require('../../assets/images/building.png')} style={tabIconStyles.image} />
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
                                    <Image source={require('../../assets/images/academic.png')} style={tabIconStyles.image} />
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
                                    <Image source={require('../../assets/images/news.png')} style={tabIconStyles.image} />
                                </View>
                                <Text style={tabIconStyles.text}>News</Text>
                            </View>
                        )
                    }} />
                    <Tabs.Screen name="CentralScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="HomeScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="FsegaScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="DreptScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="MathematicaScreen" options={{tabBarItemStyle: {display: 'none'},}}/>
                    <Tabs.Screen name="CreicScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="NttScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="LitereScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="ObservatorScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="DppdScreen" options={{tabBarItemStyle: {display: 'none'}}}/>
                    <Tabs.Screen name="ExameneScreen" options={{tabBarItemStyle:{display: 'none'}}}/>
                    <Tabs.Screen name="ConsultareNoteScreen" options={{tabBarItemStyle:{display: 'none'}}}/>
                    <Tabs.Screen name="TaxeScreen" options={{tabBarItemStyle:{display: 'none'}}}/>
                    <Tabs.Screen name="LogIntoNewScreen" options={
                        {headerShown:false,
                            tabBarItemStyle:{display: 'none'},
                            tabBarStyle: {
                                display: 'none'
                            }
                        }
                    }/>
                    <Tabs.Screen name="LoginScreen" options={
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
                                router.push('HomeScreen');
                            }}
                            style={[
                                tw`absolute`,
                                {
                                    bottom: Platform.OS === 'android' ? height * 0.015 : height * 0.03,
                                }
                            ]}
                        >
                            <View style={{
                                shadowColor: "#024073",
                                shadowOffset: {width: 0, height: height * 0.012},
                                shadowOpacity: 0.1,
                                backgroundColor: "#fff",
                                borderRadius: buttonWidth,
                                padding: buttonWidth * 0.07,
                                paddingBottom: buttonWidth * 0.08
                            }}>
                                <Image
                                    source={require('../../assets/images/home.png')}
                                    style={{
                                        width: buttonWidth,
                                        height: buttonHeight,
                                        borderRadius: 100,
                                        borderColor: "#fff",
                                        shadowColor: "#024073",
                                        shadowOffset: {width: 0, height: height * 0.012},
                                        shadowOpacity: 0.1,
                                        resizeMode: "contain"
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>)}
            </Animated.View>
        </>
    );
}