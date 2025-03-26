import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import {View} from "react-native";
import ProfilePageSmallContainer from "../components/ProfilePageSmallContainer";
import ProfilePageLargeContainer from "../components/ProfilePageLargeContainer";

export default function ProfileScreen() {
    return (
        <View style={{backgroundColor: '#fff'}}>
            <FloatingHeader text="PROFIL"/>
            <View style={{alignItems: "center", backgroundColor:'#fff'}}>
                <ProfilePageSmallContainer title="STUDENT" content="PLACEHOLDER"/>
                <ProfilePageLargeContainer title="CREDENȚIALE" username="PLACEHOLDER" password="PLACEHOLDER"/>
                <ProfilePageSmallContainer title="NR. MATRICOL" content="PLACEHOLDER"/>
                <ProfilePageSmallContainer title="COD" content="PLACEHOLDER"/>
            </View>
        </View>
    )
}
