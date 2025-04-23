import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import {View} from "react-native";

export default function HomeScreen() {
    return (
        <View style={{backgroundColor:'#fff'}}>
            <FloatingHeader text="ORAR"/>
        </View>
    );
}