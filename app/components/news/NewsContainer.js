import {Alert, Linking, Pressable, Text, View} from "react-native";
import React from "react";
import styles from '../../utils/styles/news.styles'

export default function NewsContainer({date, title, link}) {
return (
    <View style={styles.mainView}>
        <Pressable onPress={() => {
            Alert.alert(
                `Open in browser?`,
                `FMIHub wants to open "${link}" in a browser`,
                [
                    {text: 'Cancel', style: 'cancel',},
                    {text: 'Open', onPress: () => {Linking.openURL(link);}},
                ],
                { cancelable: true }
            );
        }}>
            <View style={styles.newsView}>
                <View style={styles.dateView}>
                    <Text style={styles.dateText}> {new Date(date).toLocaleString('ro-RO')} </Text>
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}> {title} </Text>
                </View>
            </View>
        </Pressable>
    </View>
)
}