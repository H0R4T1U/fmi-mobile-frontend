import {Dimensions, ScrollView, Text, View,} from "react-native";
import { scaleHeight, scaleWidth } from "../utils/ScaleFunction";
import {useState} from "react";
const {height, width} = Dimensions.get('window');

import headerHeightContext from "react-native-screens/src/native-stack/utils/HeaderHeightContext";

export default function TabelTaxePlatite({examene}) {
    const [rowHeights, setRowHeights] = useState({});

    const handleTextLayout = (index: number, event: LayoutChangeEvent) => {
        const height = event.nativeEvent.layout.height;

        setRowHeights((prevHeights) => ({
            ...prevHeights,
            [index]: Math.max(prevHeights[index] || 0, height),
        }));
    };
    return (
        <View style={{ alignItems: "center", paddingTop: height*0.01,  paddingHorizontal: width*0.01,}}>
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
                shadowRadius: 0.7,
                marginTop:10,
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
                                borderRadius: 10,
                                height:height*0.045,
                                paddingRight:width*0.022
                            }}
                        >
                            <View style={{
                                width:width*0.145,
                                marginLeft:width*0.022,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    fontSize: height*0.014,
                                    fontFamily: 'Montserrat',
                                    color: '#FFF',
                                    fontWeight: "500",
                                    justifyContent:"center",
                                    textAlignVertical:"center",
                                    alignSelf:"center",
                                    alignItems:"center"
                                }}>
                                    NR. CRT
                                </Text>
                            </View>


                            <View style={{
                                width:width*0.165,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    fontSize: height*0.014,
                                    fontFamily: 'Montserrat',
                                    color: '#FFF',
                                    fontWeight: "500",
                                    justifyContent:"center",
                                    textAlignVertical:"center",
                                    alignSelf:"center",
                                }}>
                                    SERIA
                                </Text>
                            </View>

                            <View style={{
                                width:width*0.2,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    fontSize: height*0.014,
                                    fontFamily: 'Montserrat',
                                    color: '#FFF',
                                    fontWeight: "500",
                                    justifyContent:"center",
                                    textAlignVertical:"center",
                                    alignSelf:"center",
                                    alignItems:"center",
                                }}>
                                    NUMARUL
                                </Text>
                            </View>

                            <View style={{
                                width:width*0.2,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    fontSize: scaleHeight(12),
                                    fontFamily: 'Montserrat',
                                    color: '#FFF',
                                    fontWeight: "500",
                                    justifyContent:"center",
                                    textAlignVertical:"center",
                                    alignSelf:"center",
                                }}>
                                    DATA
                                </Text>
                            </View>

                            <View style={{
                                width:width*0.19,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    fontSize: height*0.014,
                                    fontFamily: 'Montserrat',
                                    color: '#FFF',
                                    fontWeight: "500",
                                    justifyContent:"center",
                                    textAlignVertical:"center",
                                    alignSelf:"center",
                                }}>
                                    VALOARE
                                </Text>
                            </View>

                            <View style={{
                                width:width*0.26,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    fontSize: height*0.014,
                                    fontFamily: 'Montserrat',
                                    color: '#FFF',
                                    fontWeight: "500",
                                    justifyContent:"center",
                                    textAlignVertical:"center",
                                    alignSelf:"center",
                                }}>
                                    EXPLICATIE
                                </Text>
                            </View>

                            <View style={{
                                width:width*0.16,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    fontSize: height*0.014,
                                    fontFamily: 'Montserrat',
                                    color: '#FFF',
                                    fontWeight: "500",
                                    justifyContent:"center",
                                    textAlignVertical:"center",
                                    alignSelf:"center",
                                }}>
                                    MESAJ
                                </Text>
                            </View>


                        </View>

                        <ScrollView

                            contentContainerStyle={{
                                paddingBottom:height*0.02,

                                alignItems:"flex-start",
                                justifyContent:"flex-start"
                            }}>

                            {examene.map((examen,index) => (
                                <View
                                    key={index}
                                    onLayout={(event) => handleTextLayout(index, event)}
                                    style={{
                                        marginTop: height*0.011,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        minHeight: rowHeights[index] || height*0.035,
                                    }}
                                >
                                    <View style={{
                                        width: width*0.145,
                                        minHeight: rowHeights[index] ||height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius:5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.022
                                    }}>
                                        <Text style={{

                                            fontSize: height*0.014,
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: 'center',

                                        }}>
                                            {examen.nr}
                                        </Text>
                                    </View>

                                    <View style={{
                                        width: width*0.165,
                                        minHeight: rowHeights[index] ||height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={{

                                            fontSize: height*0.014,
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",

                                        }}>
                                            {examen.tips}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.2,
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={{

                                            fontSize: height*0.014,
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",

                                        }}>
                                            {examen.tipd}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.2,
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={{
                                            fontSize: height*0.014,
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            {examen.tipe}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.19,
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={{
                                            fontSize: height*0.014,
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            {examen.data}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.26,
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={{
                                            fontSize: height*0.014,
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            {examen.ora}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.16,
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={{
                                            fontSize: height*0.014,
                                            fontFamily: 'Montserrat',
                                            color: '#024073',
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}>
                                            {examen.durata}
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