import {Alert, Dimensions, Linking, Pressable, Text, View} from "react-native";
import React from "react";

const {height, width} = Dimensions.get('window');

export default function NewsContainer({date, title, link}) {
return (
    <View style={{
        alignItems: "center",
        paddingTop: height*0.014
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
                backgroundColor: "rgba(174,185,196,0.49)",
                width: width*0.86,
                borderRadius:10,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: '#AEB9C4',
                height: height*0.206,
                marginHorizontal: width*0.01,
                boxShadow: `0px ${height*0.005} ${height*0.005} #02407320`,
            }}>
                {/* container data anuntului*/}
                <View style={{
                    marginTop: height*0.0113,
                    marginLeft: width*0.025,
                    justifyContent: "center",
                    alignItems:"flex-start",


                }}>
                    <Text style={{
                        backgroundColor: "rgba(2, 64, 115, 1)",
                        fontSize: height*0.0165,
                        borderRadius: 5,
                        paddingHorizontal:width*0.015,
                        paddingVertical:height*0.004,
                        fontFamily: 'Montserrat',
                        fontWeight: "600",
                        color: '#fff',
                    }}>
                        {new Date(date).toLocaleString('ro-RO')}
                    </Text>
                </View>

                {/* container titlul anuntului*/}
                <View style={{
                    backgroundColor: "rgba(174,185,196,0.85)",
                    marginHorizontal: width*0.025,
                    marginVertical: height*0.01,
                    borderRadius: 5,
                    height: height*0.14,
                    justifyContent: 'center',

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