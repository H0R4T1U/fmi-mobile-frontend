import {Alert, ImageBackground, Pressable, Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
import {useNavigation} from "expo-router";

export default function BuildingContainer({name, image, address, route}) {
    const navigation = useNavigation();
    return (
        <View style={{alignItems: "center", paddingTop: scaleHeight(13)}}>
            <Pressable onPress={() => navigation.navigate(route)}>
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
                            opacity: 0.8,
                        }}
                    >
                        <View style={{

                            marginTop: scaleWidth(55),
                            marginLeft: scaleWidth(10),
                            justifyContent: "center",
                        }}>
                            <Text style={{
                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                borderRadius: scaleWidth(5),
                                paddingVertical: scaleHeight(3),
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
                            backgroundColor: "rgba(255, 255, 255, 0.6)",
                            height: scaleHeight(21),
                            width: scaleWidth(220),
                            borderRadius: scaleWidth(5),
                            marginTop: scaleHeight(5),
                            marginLeft: scaleWidth(10),
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                fontSize: scaleHeight(10),
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                paddingLeft: scaleWidth(5),
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