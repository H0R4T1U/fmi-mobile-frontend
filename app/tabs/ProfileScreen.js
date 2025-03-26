import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import {View} from "react-native";
import ProfilePageSmallContainer from "../components/ProfilePageSmallContainer";
import {scaleHeight} from "../utils/ScaleFunction";
import ProfilePageLargeContainer from "../components/ProfilePageLargeContainer";

export default function ProfileScreen() {
    return (
        <View style={{alignItems: "center"}}>
            <FloatingHeader text="PROFIL"/>
            <ProfilePageSmallContainer title="STUDENT" content="PLACEHOLDER"/>
            <ProfilePageLargeContainer title="CREDENȚIALE" username="PLACEHOLDER" password="PLACEHOLDER"/>
            <ProfilePageSmallContainer title="NR. MATRICOL" content="PLACEHOLDER"/>
            <ProfilePageSmallContainer title="COD" content="PLACEHOLDER"/>
        </View>
    )
}
