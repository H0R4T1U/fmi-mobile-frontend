import {View,Text} from "react-native";
import FMIHubHeaderTitle from "./FMIHubHeaderTitle";
import React from "react";
import {scaleHeight} from "../utils/ScaleFunction.js";

export default function FMIHubHeader() {
    return (
        <View style={{
            height: scaleHeight(65),
            backgroundColor: 'transparent',
            position: 'relative',
            width:"100%",
            overflow: 'hidden',
        }}>
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: scaleHeight(65),
                backgroundColor: "#AEB9C4",
                opacity: 0.49,
                overflow: 'hidden',
                width:"100%",

            }}/>

            <View style={{
                position: 'absolute',
                overflow: 'hidden',
                width:"100%",

            }}>

                <FMIHubHeaderTitle/>

            </View>
        </View>
    )
}