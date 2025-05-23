import {View} from "react-native";
import FMIHubHeaderTitle from "./FMIHubHeaderTitle";
import React from "react";
import styles from '../../utils/styles/common.styles';

export default function FMIHubHeader() {
    return (
        <View style={styles.headerMainView}>
            <View style={styles.headerBackgroundView}/>
            <View style={styles.headerTitleView}>
                <FMIHubHeaderTitle/>
            </View>
        </View>
    )
}