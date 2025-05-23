import {Text, View} from "react-native";
import React from "react";
import styles from '../../utils/styles/common.styles';

export default function FMIHubHeaderTitle() {
    return (
    <View style={styles.titleMainView}>
        <Text style={styles.titleLeftText}>FMI</Text>
        <Text style={styles.titleRightText}>Hub</Text>
    </View>
    );
}
