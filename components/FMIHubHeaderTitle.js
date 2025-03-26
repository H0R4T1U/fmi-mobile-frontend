import {Text, View} from "react-native";
import React from "react";
import {scaleHeight, scaleWidth} from "../app/ScaleFunction.js";
import {useFonts} from "expo-font";

export default function FMIHubHeaderTitle() {
    const [fontsLoaded] = useFonts({
        'Peddana': require('../assets/fonts/Peddana-Regular.ttf'),
    });
    if (!fontsLoaded) return null;
    return (
    <View style={{
        position: 'absolute',
        zIndex: 2,
        flexDirection: 'row',
        top: scaleHeight(10),
        paddingHorizontal: scaleWidth(15),
        alignItems: 'center',
    }}>
        <Text style={{
            fontSize: scaleHeight(36),
            fontFamily: 'Peddana',
            color: '#024073',
            fontWeight: 'bold',
        }}>
            FMI
        </Text>
        <Text style={{
            fontSize: scaleHeight(36),
            fontFamily: 'Peddana',
            color: '#5A81A3',
            fontWeight: 'bold',
        }}>
            Hub
        </Text>
    </View>
    )
}
