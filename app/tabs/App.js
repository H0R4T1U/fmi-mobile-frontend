import React from "react";
import Navbar from "../components/Navbar.js";
import {View} from 'react-native';
import {scaleHeight} from "../utils/ScaleFunction";
import {NavigationContainer} from "expo-router/build/fork/NavigationContainer";

export default function App() {
    return (

        <View style={{flex:1, backgroundColor: '#fff', marginVertical: scaleHeight(47)}}>
            <Navbar/>
        </View>
    )
}
