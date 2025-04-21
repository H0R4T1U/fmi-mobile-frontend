import {Dimensions, Text, View} from "react-native";
import React from "react";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction.js";
import {useFonts} from "expo-font";
const {height, width} = Dimensions.get('window');

export default function FMIHubHeaderTitle() {
    const [fontsLoaded] = useFonts({
        'Peddana': require('../../assets/fonts/Peddana-Regular.ttf'),
    });
    if (!fontsLoaded) {

        return <Text>Loading...</Text>;
    }
    return (
    <View style={{
        flexDirection: 'row',
        top: height*0.025,
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
