import {Dimensions, Text, View} from "react-native";
import React from "react";
const { width, height } = Dimensions.get('window');
import {scale} from "../app/ScaleFunction.js";

export default function FloatingHeaderTitle() {
    return (
    <View style={{
        position: 'absolute',
        zIndex: 2,
        flexDirection: 'row',
        top: scale(17),
        paddingHorizontal: 15,
        alignItems: 'center',
    }}>
        <Text style={{
            fontSize: scale(24),
            fontFamily: 'Peddana',
            color: '#024073',
            fontWeight: 'bold',
        }}>
            FMI
        </Text>
        <Text style={{
            fontSize: scale(24),
            fontFamily: 'Peddana',
            color: '#5A81A3',
        }}>
            Hub
        </Text>
    </View>
    )
}
