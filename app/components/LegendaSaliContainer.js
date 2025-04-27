import {Dimensions, ScrollView, Text, View} from "react-native";
const {height, width} = Dimensions.get('window');

export default function LegendaSaliContainer({ rooms }) {
    return (
        <View style={{ alignItems: "center", paddingTop: height*0.014 }}>
            <View style={{
                backgroundColor: "rgba(174,185,196,0.49)",
                borderStyle: "solid",
                borderColor: "#AEB9C4",
                borderWidth: 0.5,
                height:(height*0.106)+rooms.length*(height*0.04)+rooms.length*(height*0.015),
                maxHeight:height*0.52,
                width:width*0.86,
                borderRadius: 10,
                shadowColor: "#024073",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 0.7,
                paddingBottom:height*0.01
            }}>
                <View style={{
                    marginTop:height*0.015,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{
                        backgroundColor: "#AEB9C4",
                        borderRadius: 5,
                        paddingVertical: height*0.006,
                        paddingHorizontal: width*0.03,
                        fontSize: height*0.0155,
                        fontFamily: 'Montserrat',
                        fontWeight: "600",
                        color: '#024073',
                        textAlign: 'center'
                    }}>
                        LEGENDA SĂLILOR
                    </Text>
                </View>

                <View style={{
                    marginTop:height*0.022,
                    marginBottom: height*0.005,
                    flexDirection: "row",
                    justifyContent:"center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        backgroundColor: "#024073",
                        borderRadius: 5,
                        fontSize: height*0.0145,
                        fontFamily: 'Montserrat',
                        width: width*0.256,
                        color: '#FFF',
                        paddingVertical: height*0.005,
                        paddingHorizontal: width*0.083,
                        fontWeight: "500",
                        textAlign: 'center'
                    }}>
                        SALA
                    </Text>

                    <Text style={{
                        backgroundColor: "#024073",
                        borderRadius: 5,
                        fontSize:height*0.0145,
                        fontFamily: 'Montserrat',
                        color: '#FFF',
                        width: width*0.53,
                        paddingVertical: height*0.005,
                        paddingHorizontal: width*0.165,
                        marginLeft:width*0.02,
                        fontWeight: "500",
                        textAlign: 'center'
                    }}>
                        LOCALIZARE
                    </Text>
                </View>

                <ScrollView style={{
                    paddingHorizontal:width*0.023
                }}>
                    {rooms.map((room, index) => (
                        <View
                            key={index}
                            style={{
                                marginTop: height*0.011,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent:"center"
                            }}
                        >
                            <Text style={{
                                backgroundColor: "#fff",
                                borderRadius: 5,
                                fontSize: height*0.016,
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                height:height*0.04,
                                width: width*0.256,
                                fontWeight: "500",
                                textAlign: 'center',
                                textAlignVertical: "center",
                                lineHeight: height*0.04,
                            }}>
                                {room.sala}
                            </Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{

                                marginLeft: width*0.02,
                                backgroundColor: "#fff",
                                borderRadius:5,
                                height: height*0.04,
                                width:  width*0.53,



                            }} contentContainerStyle={{ alignItems: "center"}} >
                                <Text style={{

                                    fontSize: height*0.016,
                                    fontFamily: 'Montserrat',
                                    color: '#024073',
                                    fontWeight: "500",
                                    height: height*0.04,
                                    textAlign: "center",
                                    textAlignVertical: "center",
                                    lineHeight: height*0.04,
                                    minWidth: '100%',
                                    paddingHorizontal:width*0.02

                                }}>
                                    {room.localizare}
                                </Text>
                            </ScrollView>

                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}