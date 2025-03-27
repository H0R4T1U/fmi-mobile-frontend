import {Alert, ImageBackground, Pressable, Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";

export default function BuildingContainer({name, image, address}) {
    return (
        <View style={{alignItems: "center", paddingTop: scaleHeight(13)}}>
            <Pressable onPress={() => Alert.alert(name, address)}>
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
                            backgroundColor: 'rgba(202,201,201,0.3)',
                        }} />
                        <View style={{

                            marginTop: scaleHeight(55),
                            marginLeft: scaleWidth(10),
                            justifyContent: "center",
                            alignItems:"flex-start"
                        }}>
                            <Text style={{
                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                borderRadius: scaleWidth(5),
                                paddingVertical: scaleHeight(3),
                                paddingHorizontal:scaleWidth(5),
                                fontSize: scaleHeight(16),
                                fontFamily: 'Montserrat',
                                fontWeight: "500",
                                color: '#024073',
                                paddingLeft: scaleWidth(5),
                            }}>
                                {name}
                            </Text>
                        </View>
                        <View style={{

                            marginTop: scaleHeight(5),
                            marginLeft: scaleWidth(10),
                            justifyContent: "center",
                            alignItems:"flex-start"

                        }}>
                            <Text style={{
                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                height: scaleHeight(21),
                                borderRadius: scaleWidth(5),
                                paddingHorizontal:scaleWidth(5),
                                fontSize: scaleHeight(10),
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                paddingVertical:scaleHeight(3)

                            }}>
                                {address}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </Pressable>
        </View>
    )
}