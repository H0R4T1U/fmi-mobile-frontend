import {Alert, Pressable, ScrollView, Text, View,} from "react-native";
import { scaleHeight, scaleWidth } from "../utils/ScaleFunction";
import {useState} from "react";

export default function TabelTaxeNeplatite({examene}) {
    const [rowHeights, setRowHeights] = useState({});

    const handleTextLayout = (index: number, event: LayoutChangeEvent) => {
        const height = event.nativeEvent.layout.height;

        setRowHeights((prevHeights) => ({
            ...prevHeights,
            [index]: Math.max(prevHeights[index] || 0, height),
        }));
    };
    return (
        <View style={{ alignItems: "center", paddingTop: scaleHeight(5),  paddingHorizontal: scaleWidth(20),}}>
            <View style={{
                backgroundColor: "rgba(174,185,196,0.49)",
                borderStyle: "solid",
                borderColor: "#AEB9C4",
                borderWidth: 0.5,
                height: scaleHeight(480),
                width: scaleWidth(390),
                borderRadius: scaleWidth(10),
                shadowColor: "#024073",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: scaleHeight(4) },
                shadowRadius: scaleHeight(0.7),
                marginTop:scaleHeight(10),
                overflow: "hidden",
            }}>
                <ScrollView
                    horizontal={true}

                >

                    <View>
                        <View

                            style={{
                                flexDirection: "row",
                                backgroundColor: "#AEB9C4",
                                borderRadius: scaleWidth(10),
                                height:scaleHeight(40),
                                paddingRight:scaleWidth(10)
                            }}
                        >
                            <Text style={{
                                marginLeft:scaleWidth(10),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(5),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:scaleWidth(60),
                                alignItems:"center"
                            }}>
                                NR. CRT
                            </Text>

                            <Text style={{
                                marginLeft:scaleWidth(5),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(15),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:scaleWidth(83)
                            }}>
                                TIP TAXA
                            </Text>
                            <Text style={{
                                marginLeft:scaleWidth(5),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(9),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                alignItems:"center",
                                width:scaleWidth(85)
                            }}>
                                DESCRIERE
                            </Text>
                            <Text style={{
                                marginLeft:scaleWidth(5),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(5),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:scaleWidth(108)
                            }}>
                                AN UNIVERSITAR
                            </Text>
                            <Text style={{
                                marginLeft:scaleWidth(5),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(15),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:scaleWidth(83)
                            }}>
                                VALOARE
                            </Text>
                            <Text style={{
                                marginLeft:scaleWidth(5),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(5),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:scaleWidth(107)
                            }}>
                                DATA SCADENTA
                            </Text>
                            <Text style={{
                                marginLeft:scaleWidth(5),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(12),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:scaleWidth(60)
                            }}>
                                PLATA
                            </Text>

                        </View>

                        <ScrollView

                            contentContainerStyle={{
                                paddingBottom:scaleHeight(20),

                                alignItems:"flex-start",
                                justifyContent:"flex-start"
                            }}>

                            {examene.map((examen,index) => (
                                <Pressable
                                    key={index}
                                    onLayout={(event) => handleTextLayout(index, event)}
                                    style={{
                                        marginTop: scaleHeight(10),
                                        flexDirection: "row",
                                        alignItems: "center",
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                    }}
                                    onPress={()=>Alert.alert(`plateste`)}
                                >

                                    <View style={{
                                        width: scaleWidth(60),
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:scaleWidth(10)
                                    }}>
                                        <Text style={{

                                            fontSize: scaleHeight(14),
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: 'center',

                                        }}>
                                            {examen.nr}
                                        </Text>
                                    </View>

                                    <View style={{
                                        width: scaleWidth(83),
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:scaleWidth(5)
                                    }}>
                                        <Text style={{

                                            fontSize: scaleHeight(14),
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",

                                        }}>
                                            {examen.tips}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: scaleWidth(85),
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:scaleWidth(5)
                                    }}>
                                        <Text style={{

                                            fontSize: scaleHeight(14),
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",

                                        }}>
                                            {examen.tipd}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: scaleWidth(108),
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:scaleWidth(5)
                                    }}>
                                        <Text style={{
                                            fontSize: scaleHeight(14),
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            {examen.tipe}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: scaleWidth(83),
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:scaleWidth(5)
                                    }}>
                                        <Text style={{
                                            fontSize: scaleHeight(14),
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            {examen.data}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: scaleWidth(107),
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:scaleWidth(5)
                                    }}>
                                        <Text style={{
                                            fontSize: scaleHeight(14),
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            {examen.ora}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: scaleWidth(60),
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:scaleWidth(5)
                                    }}>
                                        <Text style={{
                                            fontSize: scaleHeight(14),
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            {examen.durata}
                                        </Text>
                                    </View>


                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>



            </View>



        </View>

    )
}