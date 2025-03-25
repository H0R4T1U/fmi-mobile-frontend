import {Dimensions, View} from "react-native";
import FloatingHeaderTitle from "./FloatingHeaderTitle";
import React from "react";
import {scale} from "../app/ScaleFunction.js";

export default function FMIHubHeader() {
    return (
        <View style={{
            height: scale(60),
            backgroundColor: 'transparent',
            position: 'relative',
        }}>
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: scale(60),
                backgroundColor: "#AEB9C4",
                opacity: 0.49,
                zIndex: 1,
            }}/>

            <View style={{
                position: 'absolute',
                zIndex: 2,
            }}>
                <FloatingHeaderTitle/>
            </View>
        </View>
    )
}