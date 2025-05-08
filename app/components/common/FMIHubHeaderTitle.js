import {Dimensions, Platform, Text, View} from "react-native";
import React from "react";
import {useFonts} from "expo-font";

const {height, width} = Dimensions.get('window');

export default function FMIHubHeaderTitle() {
    useFonts({'Peddana': require('../../../assets/fonts/Peddana-Regular.ttf')});
    return (
    <View style={{
        flexDirection: 'row',
        top: Platform.OS === "android" ? height*0.027 : height * 0.037,
        paddingHorizontal: width*0.05,
        alignItems: 'center',
        overflow: 'hidden',
    }}>
        <Text style={{
            fontSize: 36,
            fontFamily: 'Peddana',
            color: '#024073',
        }}>
            FMI
        </Text>
        <Text style={{
            fontSize: 36,
            fontFamily: 'Peddana',
            color: '#5A81A3',
        }}>
            Hub
        </Text>
    </View>
    )
}
