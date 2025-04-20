import tw from "twrnc";
import ProfileScreen from "../tabs/ProfileScreen";
import {Animated, Image, TouchableOpacity, View} from "react-native";
import BuildingsScreen from "../tabs/BuildingsScreen";
import AcademicScreen from "../tabs/AcademicScreen";
import NewsScreen from "../tabs/NewsScreen";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FMIHubHeader from "./FMIHubHeader";
<<<<<<< Updated upstream
import {scaleWidth} from "../utils/ScaleFunction";
import {scaleHeight} from "../utils/ScaleFunction";
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
import FsegaScreen from "../tabs/FsegaScreen";
import HomeScreen from "../tabs/HomeScreen";
import {Tabs, useNavigation} from "expo-router";
import CentralScreen from "../tabs/CentralScreen";
import DreptScreen from "../tabs/DreptScreen";
import MathematicaScreen from "../tabs/MathematicaScreen";
import CreicScreen from "../tabs/CreicScreen";
import NttScreen from "../tabs/NttScreen";
import LitereScreen from "../tabs/LitereScreen";
import ObservatorScreen from "../tabs/ObservatorScreen";
import DppdScreen from "../tabs/DppdScreen";
<<<<<<< Updated upstream
>>>>>>> Stashed changes

=======
import ExameneScreen from "../tabs/ExameneScreen";
import ConsultareNoteScreen from "../tabs/ConsultareNoteScreen";
import TaxeScreen from "../tabs/TaxeScreen";
const {height, width} = Dimensions.get('window');
const buttonWidth =width*0.25;
const buttonHeight = width*0.25;
>>>>>>> Stashed changes

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


// const Tab = createBottomTabNavigator();

export default function Navbar() {
    const navigation = useNavigation();
    const linking = {
        prefixes: ['fmihub://'],
        config: {
            screens: {
                Home: 'home',
                Profil: 'profile',
                Clădiri: 'buildings',
                Academic: 'academic',
                News: 'news',
                Central: 'central',
                Fsega: 'fsega',
                Drept: 'drept',
                Mathematica: 'mathematica',
                Creic: 'creic',
                Ntt: 'ntt',
                Litere: 'litere',
                Observator: 'observator',
                Dppd: 'dppd',
                Examene: 'examene',
                ConsultareNote: 'consultare-note',
                Taxe: 'taxe',
                AuthCallback: 'auth-callback',
            }
        }
    };
    return (
        <Animated.View style={[tw`flex-1`, { backgroundColor: "#fff" }]}>
            {/*<NavigationContainer linking={linking}>*/}
            <Tabs
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
                <Tabs.Screen name="Profil" component={ProfileScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/profile.png')} style={tabIconStyles.image} />
                        </View>
                    ),
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }} />

                {/* buildings button */}
                <Tabs.Screen name="Clădiri" component={BuildingsScreen} options={{
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
                <Tabs.Screen name="Academic" component={AcademicScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/academic.png')} style={tabIconStyles.image} />
                        </View>
                    ),
                    tabBarItemStyle: {
                        marginLeft: scaleWidth(55)
                    },
                    sceneStyle: {
                        backgroundColor: "#fff"}
                }} />

                {/* news button */}
                <Tabs.Screen name="News" component={NewsScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/news.png')} style={tabIconStyles.image} />
                        </View>
                    ),
                    sceneStyle: {
                        backgroundColor: "#fff"}
                }} />
<<<<<<< Updated upstream
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Central" component={CentralScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Fsega" component={FsegaScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Drept" component={DreptScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Mathematica" component={MathematicaScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Creic" component={CreicScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Ntt" component={NttScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Litere" component={LitereScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Observator" component={ObservatorScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
                <Tab.Screen name="Dppd" component={DppdScreen} options={{
                    tabBarItemStyle: {display: 'none'}
                }}/>
=======
                <Tabs.Screen name="Home" component={HomeScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Central" component={CentralScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Fsega" component={FsegaScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Drept" component={DreptScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Mathematica" component={MathematicaScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Creic" component={CreicScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Ntt" component={NttScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Litere" component={LitereScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Observator" component={ObservatorScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tabs.Screen name="Dppd" component={DppdScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}

                }}/>
                <Tabs.Screen name={"Examene"} component={ExameneScreen} options={
                    {tabBarItemStyle:{display: 'none'},
                        sceneStyle: {
                            backgroundColor: "#ffffff"}
                    }

                }/>
                <Tabs.Screen name={"ConsultareNote"} component={ConsultareNoteScreen} options={
                    {tabBarItemStyle:{display: 'none'},
                        sceneStyle: {
                            backgroundColor: "#ffffff"}
                    }

                }/>
                <Tabs.Screen name={"Taxe"} component={TaxeScreen} options={
                    {tabBarItemStyle:{display: 'none'},
                        sceneStyle: {
                            backgroundColor: "#ffffff"}
                    }

                }/>
                <Tabs.Screen
                    name="AuthCallback"
                    // component={AuthCallbackScreen}
                    options={{
                        tabBarItemStyle: {display: 'none'},
                        sceneStyle: {backgroundColor: "#ffffff"}
                    }}
                />
>>>>>>> Stashed changes



            </Tabs>
            {/*</NavigationContainer>*/}

            {/* home button */}
            <View style={tw`items-center`}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                    style={[
                        tw`absolute`,
                        {
                            bottom: scaleHeight(25),
                            left: scaleWidth(146),
                        }
                    ]}
                >
                    <View style={{
                        shadowColor: "#024073",
                        shadowOffset: {width: 0, height: scaleHeight(10)},
                        shadowOpacity: 0.1,
                        shadowRadius: scaleHeight(0.7)
                    }}>
                        <Image
                            source={require('../../assets/images/home.png')}
                            style={{
                                width: buttonWidth,
                                height: buttonHeight,
                                borderRadius: buttonWidth / 2,
                                borderColor: "#fff",
                                borderWidth: 10,

                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}
