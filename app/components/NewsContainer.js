import {Linking, Alert, Dimensions, Pressable, Text, View} from "react-native";
import React, { useState, useEffect } from "react";
const {height, width} = Dimensions.get('window');

export default function NewsContainer({date, title, link}) {
return (
    <View style={{
        alignItems: "center",
        paddingTop: height*0.014,
        shadowColor: "#024073",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 0.7,
    }}>
        <Pressable onPress={() => {
            Alert.alert(
                `Open in browser?`,
                `FMIHub wants to open "${link}" in a browser`,
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Open',
                        onPress: () => {
                            Linking.openURL(link);
                        },
                    },
                ],
                { cancelable: true }
            );
        }}>
            {/* containerul mare*/}
            <View style={{
                backgroundColor: "#AEB9C47D",
                width: width*0.86,
                borderRadius:10,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: '#AEB9C4',
                height: height*0.2,
                marginHorizontal: width*0.01,
            }}>
                {/* container data anuntului*/}
                <View style={{
                    marginTop: height*0.0113,
                    marginLeft: width*0.025,
                    justifyContent: "center",
                    alignItems:"flex-start"

                }}>
                    <Text style={{
                        backgroundColor: "rgba(2, 64, 115, 1)",
                        fontSize: height*0.0165,
                        borderRadius: 5,
                        paddingHorizontal:width*0.015,
                        paddingVertical:height*0.004,
                        fontFamily: 'Montserrat',
                        fontWeight: "700",
                        color: '#fff',
                    }}>
                        {new Date(date).toLocaleString('ro-RO')}
                    </Text>
                </View>

                {/* container titlul anuntului*/}
                <View style={{
                    backgroundColor: "#AEB9C4",
                    marginHorizontal: width*0.025,
                    marginVertical: height*0.01,
                    borderRadius: 5,
                    height: height*0.14,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#024073',
                        paddingHorizontal: width * 0.07
                    }}>
                        {title}
                    </Text>
                </View>
            </View>
        </Pressable>
    </View>
)
}