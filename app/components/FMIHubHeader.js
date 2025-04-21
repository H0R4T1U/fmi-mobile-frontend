import {View, Text, Dimensions} from "react-native";
import FMIHubHeaderTitle from "./FMIHubHeaderTitle";
import React from "react";
import {scaleHeight} from "../utils/ScaleFunction.js";
const {height, width} = Dimensions.get('window');

export default function FMIHubHeader() {
    return (
        <View style={{
            height: height*0.1,
            backgroundColor: 'transparent',
            position: 'relative',
            width:"100%",
            //overflow: 'hidden',
        }}>
            <View style={{
                height: height*0.1,
                position: 'absolute',
                backgroundColor: "#AEB9C4",
                opacity: 0.49,
                //overflow: 'hidden',
                width:"100%",

            }}/>

            <View style={{
                position: 'absolute',
               // overflow: 'hidden',
                width:"100%",

            }}>

                <FMIHubHeaderTitle/>

            </View>
        </View>
    )
}