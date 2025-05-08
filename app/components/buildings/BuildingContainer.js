import {Dimensions, ImageBackground, Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";

const {height, width} = Dimensions.get('window');


export default function BuildingContainer({name, image, address, route}) {
    const router = useRouter();
    return (
        <View style={{alignItems: "center", paddingTop: height*0.015}}>
            <Pressable onPress={() => {
                router.navigate(route);
            }}>
                <View style={{
                    height: height*0.134,
                    marginHorizontal: width*0.02,
                    width:width*0.86,
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
                            backgroundColor: 'rgba(202,201,201,0.3)',
                        }} />
                        <View style={{

                            marginTop: height*0.07,
                            marginLeft: width*0.023,
                            justifyContent: "center",
                            alignItems:"flex-start"
                        }}>
                            <Text style={{
                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                borderRadius: 5,
                                paddingVertical: height*0.0025,
                                paddingHorizontal:width*0.01,
                                fontSize:height*0.016,
                                fontFamily: 'Montserrat',
                                fontWeight: "500",
                                color: '#024073',
                                paddingLeft:width*0.01,
                            }}>
                                {name}
                            </Text>
                        </View>
                        <View style={{

                            marginTop: height*0.007,
                            marginLeft: width*0.023,
                            justifyContent: "center",
                            alignItems:"flex-start"

                        }}>
                            <Text style={{
                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                borderRadius: 5,
                                paddingHorizontal:width*0.01,
                                fontSize:height*0.012,
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                paddingVertical: height*0.003

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