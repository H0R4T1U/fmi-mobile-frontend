import {View} from "react-native";
import TaxeDropDown from "../../components/academic/TaxeDropDown";
import LoadingView from "../../components/common/LoadingView";
import ErrorView from "../../components/common/ErrorView";
import React from "react";
import useToken from "../../utils/hooks/useToken";
import useFetch from "../../utils/hooks/useFetch";
import Constants from "expo-constants";
const { BACKEND } = Constants.expoConfig.extra;


export default function ExameneScreen() {

    return (
    <View style={{flex:1}}>
            <TaxeDropDown />
    </View>
    )
}