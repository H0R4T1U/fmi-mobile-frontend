<<<<<<< Updated upstream
import { ScrollView, Text, View } from "react-native";
import { scaleHeight, scaleWidth } from "../utils/ScaleFunction";
=======
import {Dimensions, ScrollView, Text, View} from "react-native";
const {height, width} = Dimensions.get('window');
>>>>>>> Stashed changes

export default function LegendaSaliContainer({ rooms }) {
    return (
        <View style={{ alignItems: "center", paddingTop: scaleHeight(13) }}>
            <View style={{
                backgroundColor: "rgba(174,185,196,0.49)",
                borderStyle: "solid",
                borderColor: "#AEB9C4",
                borderWidth: 0.5,
                height: scaleHeight(400),
                marginHorizontal: scaleWidth(20),
                width: scaleWidth(350),
                borderRadius: scaleWidth(10),
                shadowColor: "#024073",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: scaleHeight(4) },
                shadowRadius: scaleHeight(0.7),
            }}>
                <View style={{
                    marginTop: scaleHeight(15),
                    marginLeft: scaleWidth(10),
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        backgroundColor: "#AEB9C4",
                        borderRadius: scaleWidth(5),
                        paddingVertical: scaleHeight(4),
                        paddingHorizontal: scaleWidth(10),
                        fontSize: scaleHeight(15),
                        fontFamily: 'Montserrat',
                        fontWeight: "600",
                        color: '#024073',
                    }}>
                        LEGENDA SĂLILOR
                    </Text>
                </View>

                <View style={{
                    marginTop: scaleHeight(20),
                    marginBottom: scaleHeight(10),
                    marginLeft: scaleWidth(10),
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
                        paddingHorizontal: scaleWidth(35),
                        fontWeight: "500"
                    }}>
                        SALA
                    </Text>

                    <Text style={{
                        backgroundColor: "#024073",
                        borderRadius: scaleWidth(5),
                        fontSize: scaleHeight(12),
                        fontFamily: 'Montserrat',
                        color: '#FFF',
                        paddingVertical: scaleHeight(4),
                        paddingHorizontal: scaleWidth(72),
                        marginLeft: scaleWidth(10),
                        fontWeight: "500"
                    }}>
                        LOCALIZARE
                    </Text>
                </View>

                <ScrollView>
                    {rooms.map((room, index) => (
                        <View
                            key={index}
                            style={{
                                marginTop: scaleHeight(10),
                                marginLeft: scaleWidth(10),
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{
                                backgroundColor: "#fff",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(16),
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                height: scaleHeight(40),
                                width: scaleWidth(100),
                                fontWeight: "500",
                                textAlign: 'center',
                                textAlignVertical: "center",
                                lineHeight: scaleHeight(40),
                            }}>
                                {room.sala}
                            </Text>
                            <Text style={{
                                backgroundColor: "#fff",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(16),
                                fontFamily: 'Montserrat',
                                color: '#024073',
                                marginLeft: scaleWidth(10),
                                fontWeight: "500",
                                height: scaleHeight(40),
                                width: scaleWidth(217),
                                textAlign: "center",
                                textAlignVertical: "center",
                                lineHeight: scaleHeight(40),
                                flexWrap: 're'
                            }}>
                                {room.localizare}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}