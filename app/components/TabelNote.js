import { ScrollView, Text, View, } from "react-native";
import { scaleHeight, scaleWidth } from "../utils/ScaleFunction";
import {useState} from "react";

export default function TabelNote({examene}) {
    const [rowHeights, setRowHeights] = useState({});

    const handleTextLayout = (index: number, event: LayoutChangeEvent) => {
        const height = event.nativeEvent.layout.height;

        setRowHeights((prevHeights) => ({
            ...prevHeights,
            [index]: Math.max(prevHeights[index] || 0, height),
        }));
    };
    return (
        <View style={{ alignItems: "center", paddingTop: scaleHeight(13),  paddingHorizontal: scaleWidth(20),}}>
            <View style={{
                backgroundColor: "rgba(174,185,196,0.49)",
                borderStyle: "solid",
                borderColor: "#AEB9C4",
                borderWidth: 0.5,
                height: scaleHeight(470),
                width: scaleWidth(390),
                borderRadius: scaleWidth(10),
                shadowColor: "#024073",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: scaleHeight(4) },
                shadowRadius: scaleHeight(0.7),
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
                                paddingRight:scaleWidth(6)
                            }}
                        >
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
                                paddingHorizontal: scaleWidth(8),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:scaleWidth(83)
                            }}>
                                DISCIPLINA
                            </Text>
                            <Text style={{
                                marginLeft:scaleWidth(5),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(7),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                alignItems:"center",
                                width:scaleWidth(47)
                            }}>
                                NOTA
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
                                width:scaleWidth(85)
                            }}>
                                NR. CREDITE
                            </Text>
                            <Text style={{
                                marginLeft:scaleWidth(5),
                                backgroundColor: "#024073",
                                borderRadius: scaleWidth(5),
                                fontSize: scaleHeight(12),
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: scaleHeight(6),
                                paddingHorizontal: scaleWidth(26),
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:scaleWidth(83)
                            }}>
                                DATA
                            </Text>

                        </View>

                        <ScrollView

                            contentContainerStyle={{
                                paddingBottom:scaleHeight(20),

                                alignItems:"flex-start",
                                justifyContent:"flex-start"
                            }}>

                            {examene.map((examen,index) => (
                                <View
                                    key={index}
                                    onLayout={(event) => handleTextLayout(index, event)}
                                    style={{
                                        marginTop: scaleHeight(10),
                                        flexDirection: "row",
                                        alignItems: "center",
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                    }}
                                >
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
                                        width: scaleWidth(47),
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

                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>



            </View>



        </View>

    )
}