import {Alert, Dimensions, ImageBackground, Linking, Pressable, Text, TouchableOpacity, View} from "react-native";
const {height, width} = Dimensions.get('window');


export default function CantinaContainer({image,name,location,program, link}) {
    return (
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
        <View style={{alignItems: "center", paddingTop:height*0.01}}>
                <View style={{
                    height: height*0.125,
                    marginHorizontal: width*0.01,
                    width: width*0.86,
                    borderRadius: 10,
                    boxShadow: '0px 4px 0.8px #02407315'
                }}>
                    <ImageBackground
                        source={image}
                        style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: 10,
                            overflow: "hidden",

                        }}
                    >
                        <View style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255,255,255,0.35)',
                        }} />
                        <View style={{

                            marginTop: height*0.009,
                            marginLeft: width*0.026,
                            justifyContent: "center",
                            alignItems:"flex-start"
                        }}>
                            <Text style={{
                                backgroundColor: "rgba(187,198,209,0.65)",
                                borderRadius: 5,
                                paddingVertical: height*0.003,
                                paddingHorizontal: width*0.01,
                                fontSize: height*0.017,
                                fontFamily: 'Montserrat',
                                fontWeight: "500",
                                color: '#024073',

                            }}>
                                {name}

                            </Text>
                        </View>
                        <View style={{
                            marginTop: height*0.022,
                            marginLeft: width*0.026,

                            flexDirection: "row",
                            alignItems: "center",

                        }}>
                            <Text style={{
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.013,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.004,
                                paddingHorizontal: width*0.01,
                                fontWeight:"500"
                            }}>
                                Locatie:
                            </Text>

                            <Text style={{
                                backgroundColor: "rgba(187,198,209,0.65)",
                                borderRadius: 5,
                                fontSize: height*0.013,
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                paddingVertical: height*0.004,
                                paddingHorizontal: width*0.01,
                                marginLeft: width*0.012,
                                fontWeight:"500"
                            }}>
                                {location}
                            </Text>
                        </View>
                        <View style={{
                            marginTop: height*0.005,
                            marginLeft: width*0.026,
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom:height*0.01

                        }}>
                            <Text style={{
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.013,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical:  height*0.004,
                                paddingHorizontal: width*0.01,
                                fontWeight:"500",
                            }}>
                                Program:
                            </Text>

                            <Text style={{
                                backgroundColor: "rgba(174,185,196,0.65)",
                                borderRadius: 5,
                                fontSize:height*0.013,
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                paddingVertical:  height*0.004,
                                paddingHorizontal:width*0.01,
                                marginLeft: width*0.012,
                                fontWeight:"500"
                            }}>
                                {program}
                            </Text>
                        </View>



                    </ImageBackground>
                </View>
        </View>
        </Pressable>
    )
}