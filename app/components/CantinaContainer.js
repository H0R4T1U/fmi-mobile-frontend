import {Alert, ImageBackground, Pressable, Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";


export default function CantinaContainer({image,name,location,program}) {
    return (
        <View style={{alignItems: "center", paddingTop: scaleHeight(13)}}>

                <View style={{
                    height: scaleHeight(115),
                    marginHorizontal: scaleWidth(20),
                    width: scaleWidth(350),
                    borderRadius: scaleWidth(10),
                    shadowColor: "#024073",
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: scaleHeight(4) },
                    shadowRadius: scaleHeight(0.7),
                }}>
                    <ImageBackground
                        source={image}
                        style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: scaleWidth(10),
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

                            marginTop: scaleHeight(7),
                            marginLeft: scaleWidth(10),
                            justifyContent: "center",
                            alignItems:"flex-start"
                        }}>
                            <Text style={{
                                backgroundColor: "rgba(187,198,209,0.65)",
                                borderRadius: scaleWidth(5),
                                paddingVertical: scaleHeight(3),
                                paddingHorizontal: scaleWidth(5),
                                fontSize: scaleHeight(16),
                                fontFamily: 'Montserrat',
                                fontWeight: "500",
                                color: '#024073',

                            }}>
                                {name}

                            </Text>
                        </View>
                        <View style={{
                            marginTop: scaleHeight(23),
                            marginLeft: scaleWidth(10),

                            flexDirection: "row",
                            alignItems: "center",

                        }}>
                            <Text style={{
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(4),
                                paddingHorizontal: scaleWidth(4),
                                fontWeight:"500"
                            }}>
                                Locatie:
                            </Text>

                            <Text style={{
                                backgroundColor: "rgba(187,198,209,0.65)",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                paddingVertical: scaleHeight(4),
                                paddingHorizontal: scaleWidth(4),
                                marginLeft: scaleWidth(5),
                                fontWeight:"500"
                            }}>
                                {location}
                            </Text>
                        </View>
                        <View style={{
                            marginTop: scaleHeight(5),
                            marginLeft: scaleWidth(10),
                            marginBottom:scaleHeight(5),
                            flexDirection: "row",
                            alignItems: "center"

                        }}>
                            <Text style={{
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(4),
                                paddingHorizontal: scaleWidth(4),
                                fontWeight:"500"
                            }}>
                                Program:
                            </Text>

                            <Text style={{
                                backgroundColor: "rgba(174,185,196,0.65)",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                paddingVertical: scaleHeight(4),
                                paddingHorizontal: scaleWidth(4),
                                marginLeft: scaleWidth(5),
                                fontWeight:"500"
                            }}>
                                {program}
                            </Text>
                        </View>



                    </ImageBackground>
                </View>


        </View>
    )
}