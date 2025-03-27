import React from "react";
import Navbar from "../components/Navbar.js";
import {View} from 'react-native';
import {scaleHeight} from "../utils/ScaleFunction";

export default function App() {
    return (
        <View style={{flex:1, backgroundColor: '#fff', marginVertical: scaleHeight(47)}}>
        <Navbar/>
        </View>
    )
}
