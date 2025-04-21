import {Dimensions, ScrollView, Text, View,} from "react-native";
import { scaleHeight, scaleWidth } from "../utils/ScaleFunction";
import {useState} from "react";
const {height, width} = Dimensions.get('window');


export default function TabelExamene({examene}) {
    const [rowHeights, setRowHeights] = useState({});

    const handleTextLayout = (index: number, event: LayoutChangeEvent) => {
        const height = event.nativeEvent.layout.height;

        setRowHeights((prevHeights) => ({
            ...prevHeights,
            [index]: Math.max(prevHeights[index] || 0, height),
        }));
    };
    return (
        <View style={{ alignItems: "center", paddingTop:height*0.015 ,  paddingHorizontal: width*0.02,}}>
            <View style={{
                backgroundColor: "rgba(174,185,196,0.49)",
                borderStyle: "solid",
                borderColor: "#AEB9C4",
                borderWidth: 0.5,
                height: height*0.6,
                width: width*0.95,
                borderRadius: 10,
                shadowColor: "#024073",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius:0.7,
                overflow:"hidden"
            }}>
                    <ScrollView
                        horizontal={true}

                        >

                        <View>
                            <View

                            style={{
                                flexDirection: "row",
                                backgroundColor: "#AEB9C4",
                                borderRadius: 10,
                                height:height*0.045,
                                alignItems:"center",
                                justifyContent:"center"
                            }}
                        >
                            <Text style={{
                                marginLeft:width*0.013,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                //paddingHorizontal: width*0.015,
                                paddingLeft:width*0.015,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.145,
                                alignItems:"center"
                            }}>
                                NR. CRT
                            </Text>

                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                paddingLeft: width*0.015,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.207
                            }}>
                                TIP SESIUNE
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                paddingLeft:width*0.0227,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                alignItems:"center",
                                width:width*0.175
                            }}>
                                TIP DATA
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize:  height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical:height*0.0065,
                                paddingLeft: width*0.02,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.215
                            }}>
                                TIP EXAMEN
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                paddingLeft: width*0.0645,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.205
                            }}>
                                DATA
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                paddingLeft: width*0.05,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.158
                            }}>
                                ORA
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical:height*0.0065,
                                paddingLeft: width*0.018,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.15
                            }}>
                                DURATA
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                paddingLeft: width*0.06,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.2
                            }}>
                                SALA
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize:height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                paddingLeft: width*0.016,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.22
                            }}>
                                EXAMINATOR
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius:5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                paddingLeft: width*0.022,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                width:width*0.203
                            }}>
                                DISCIPLINA
                            </Text>
                            <Text style={{
                                marginLeft:width*0.012,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                fontSize: height*0.0135,
                                fontFamily: 'Montserrat',
                                color: '#FFF',
                                paddingVertical: height*0.0065,
                                paddingLeft: width*0.0145,
                                fontWeight: "500",
                                justifyContent:"center",
                                textAlignVertical:"center",
                                alignSelf:"center",
                                marginRight:width*0.012,
                                width:width*0.13
                            }}>
                                GRUPA
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
                                        marginTop: height*0.01,
                                        flexDirection: "row",
                                        alignItems: "center",
                                       minHeight: rowHeights[index] || height*0.1,
                                    }}
                                >
                                    <View style={{
                                        width: scaleWidth(60),
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
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
                                        width: width*0.207,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
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
                                        width:width*0.175,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
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
                                        width: width*0.215,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
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
                                        width: width*0.205,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
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
                                        width: width*0.158,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
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
                                        width: width*0.15,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
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
                                    <View style={{
                                        width: width*0.2,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
                                    }}>
                                    <Text style={{
                                        fontSize: scaleHeight(14),
                                        fontFamily: 'Montserrat',
                                        color: '#024073',
                                        fontWeight: "500",
                                        textAlign: "center",
                                    }}>
                                        {examen.sala}
                                    </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.22,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
                                    }}>
                                    <Text style={{
                                        fontSize: scaleHeight(14),
                                        fontFamily: 'Montserrat',
                                        color: '#024073',
                                        fontWeight: "500",
                                        textAlign: "center",
                                    }}>
                                        {examen.examinator}
                                    </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.203,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: scaleWidth(5),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
                                    }}>
                                    <Text style={{
                                        fontSize: scaleHeight(14),
                                        fontFamily: 'Montserrat',
                                        color: '#024073',
                                        fontWeight: "500",
                                        textAlign: "center",
                                    }}>
                                        {examen.disciplina}
                                    </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.13,
                                        minHeight: rowHeights[index] || scaleHeight(30),
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.012
                                    }}>
                                    <Text style={{
                                        fontSize: scaleHeight(14),
                                        fontFamily: 'Montserrat',
                                        color: '#024073',
                                        fontWeight: "500",
                                        textAlign: "center",
                                    }}>
                                        {examen.grupa}
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