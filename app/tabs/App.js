import React from "react";
import Navbar from "../components/Navbar.js";
import {SafeAreaView, StatusBar} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={{flex:1}}>
        <Navbar/>
        </SafeAreaView>
    )
}
