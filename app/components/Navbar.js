import tw from "twrnc";
import ProfileScreen from "../tabs/ProfileScreen";
import {Animated, Dimensions, Image, TouchableOpacity, View} from "react-native";
import BuildingsScreen from "../tabs/BuildingsScreen";
import AcademicScreen from "../tabs/AcademicScreen";
import NewsScreen from "../tabs/NewsScreen";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FMIHubHeader from "./FMIHubHeader";
import {scaleWidth} from "../utils/ScaleFunction";
import {scaleHeight} from "../utils/ScaleFunction";
import FsegaScreen from "../tabs/FsegaScreen";
import HomeScreen from "../tabs/HomeScreen";
import {useNavigation} from "expo-router";
import CentralScreen from "../tabs/CentralScreen";
import DreptScreen from "../tabs/DreptScreen";
import MathematicaScreen from "../tabs/MathematicaScreen";
import CreicScreen from "../tabs/CreicScreen";
import NttScreen from "../tabs/NttScreen";
import LitereScreen from "../tabs/LitereScreen";
import ObservatorScreen from "../tabs/ObservatorScreen";
import DppdScreen from "../tabs/DppdScreen";
import ExameneScreen from "../tabs/ExameneScreen";
import ConsultareNoteScreen from "../tabs/ConsultareNoteScreen";
import TaxeScreen from "../tabs/TaxeScreen";
import FMIHubHeaderTitle from "./FMIHubHeaderTitle";

const {height, width} = Dimensions.get('window');
const buttonWidth =width*0.25;
const buttonHeight = width*0.25;


const tabIconStyles = {
    container: [
        tw`border border-[#024073] shadow-md rounded-full justify-center items-center overflow-hidden`,
        {
            width: width*0.155,
            height: width*0.155,
            marginTop:height*0.04,
        }
    ],
    image: [
        tw`mb-2`,
        {
            width: width*0.155,
            height: height*0.1,
        }
    ]
};


const Tab = createBottomTabNavigator();

export default function Navbar() {
    const navigation = useNavigation();
    return (
        <Animated.View style={[tw`flex-1`, { backgroundColor: "#fff" }]}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        height: height*0.113,
                        backgroundColor: "#AEB9C4"
                    },
                    tabBarLabelStyle: {
                        fontSize: height*0.014,
                        fontFamily: 'Montserrat',
                        paddingTop:height*0.041,
                        color: "#024073"
                    },
                    tabBarLabelPosition: "below-icon",
                    animation: 'fade',
                    header:FMIHubHeader,
                    headerStyle: {
                        height:height*0.1,
                    },


                }}
             id={1}>

                {/* profile button */}
                <Tab.Screen name="Profil" component={ProfileScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/profile.png')} style={tabIconStyles.image} />
                        </View>
                    ),
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }} />

                {/* buildings button */}
                <Tab.Screen name="Clădiri" component={BuildingsScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/building.png')} style={tabIconStyles.image} />
                        </View>
                    ),
                    tabBarItemStyle: {
                        marginRight:width*0.135},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
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
                        marginLeft: width*0.135
                    },
                    sceneStyle: {
                        backgroundColor: "#fff"}
                }} />

                {/* news button */}
                <Tab.Screen name="News" component={NewsScreen} options={{
                    tabBarIcon: () => (
                        <View style={tabIconStyles.container}>
                            <Image source={require('../../assets/images/news.png')} style={tabIconStyles.image} />
                        </View>
                    ),
                    sceneStyle: {
                        backgroundColor: "#fff"}
                }} />
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Central" component={CentralScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Fsega" component={FsegaScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Drept" component={DreptScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Mathematica" component={MathematicaScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Creic" component={CreicScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Ntt" component={NttScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Litere" component={LitereScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Observator" component={ObservatorScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}
                }}/>
                <Tab.Screen name="Dppd" component={DppdScreen} options={{
                    tabBarItemStyle: {display: 'none'},
                    sceneStyle: {
                        backgroundColor: "#ffffff"}

                }}/>
                <Tab.Screen name={"Examene"} component={ExameneScreen} options={
                    {tabBarItemStyle:{display: 'none'},
                        sceneStyle: {
                            backgroundColor: "#ffffff"}
                    }

                }/>
                <Tab.Screen name={"ConsultareNote"} component={ConsultareNoteScreen} options={
                    {tabBarItemStyle:{display: 'none'},
                        sceneStyle: {
                            backgroundColor: "#ffffff"}
                    }

                }/>
                <Tab.Screen name={"Taxe"} component={TaxeScreen} options={
                    {tabBarItemStyle:{display: 'none'},
                        sceneStyle: {
                            backgroundColor: "#ffffff"}
                    }

                }/>



            </Tab.Navigator>

            {/* home button */}
            <View style={tw`items-center`}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                    style={[
                        tw`absolute`,
                        {

                            bottom: height*0.03,

                        }
                    ]}
                >
                    <View style={{
                        shadowColor: "#024073",
                        shadowOffset: {width: 0, height: height*0.012},
                        shadowOpacity: 0.1,
                        backgroundColor:"#fff",
                        borderRadius:buttonWidth,
                        padding:buttonWidth*0.07,
                        paddingBottom:buttonWidth*0.08

                    }}>
                        <Image
                            source={require('../../assets/images/home.png')}
                            style={{
                                width: buttonWidth,
                                height: buttonHeight,
                                borderRadius: 100,
                                borderColor: "#fff",
                                shadowColor: "#024073",
                                shadowOffset: {width: 0, height: height*0.012},
                                shadowOpacity: 0.1,
                                resizeMode:"contain"

                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}
