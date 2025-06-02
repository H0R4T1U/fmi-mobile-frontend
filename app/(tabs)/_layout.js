import React, {useEffect} from "react";
import { Animated, View, Image, Text, TouchableOpacity } from "react-native";
import { Tabs, useSegments, router } from "expo-router";
import { useTranslation } from "react-i18next";
import {StatusBar} from "expo-status-bar";
import styles from '../utils/styles/layout.styles';
import {hiddenTabs, screenOptions, visibleTabs} from "../utils/Tabs";

export default function Layout() {
    const { t } = useTranslation();
    const segments = useSegments();
    const currentScreen = segments[segments.length - 1];
    const showHomeButton = currentScreen !== "Loading" && currentScreen !== "LoginScreen";

    return (
        <>
            <StatusBar style="light" hidden={false}/>
            <Animated.View style={{flex: 1, backgroundColor: '#fff'}}>
            <Tabs screenOptions={screenOptions}>
                {visibleTabs.map(({ name, icon, labelKey, tabBarItemStyle }) => (
                    <Tabs.Screen key={name} name={name} options={{
                            tabBarIcon: () => (
                                <View style={styles.iconWrapper}>
                                    <View style={styles.container}>
                                        <Image source={icon} style={styles.image} />
                                    </View>
                                    <Text style={styles.text}>{t(labelKey)}</Text>
                                </View>
                            ),
                            ...(tabBarItemStyle ? { tabBarItemStyle } : {})
                        }}
                    />
                ))}

                {hiddenTabs.map(({ name, options }) => (
                    <Tabs.Screen key={name} name={name} options={options || {tabBarItemStyle: { display: "none" }}}/>
                ))}
            </Tabs>

            {showHomeButton && (
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {router.navigate('/HomeScreen')}} style={styles.homeButton}>
                        <View style={styles.homeButtonView}>
                            <Image source={require('../../assets/images/home.png')} style={styles.homeButtonImage}/>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            </Animated.View>
        </>
    );
}
