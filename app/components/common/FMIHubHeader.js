import {Dimensions, View} from "react-native";
import FMIHubHeaderTitle from "./FMIHubHeaderTitle";
import React from "react";

const {height} = Dimensions.get('window');

export default function FMIHubHeader() {
    return (
        <View style={{
            height: height * 0.11,
            backgroundColor: 'transparent',
            position: 'relative',
            width: "100%",
        }}>
            <View style={{
                height: height * 0.11,
                position: 'absolute',
                backgroundColor: "#AEB9C4",
                opacity: 0.49,
                width: "100%",
            }}/>
            <View style={{
                position: 'absolute',
                width: "100%",
            }}>
                <FMIHubHeaderTitle/>
            </View>
        </View>
    )
}