import {Dimensions, ScrollView, Text, View,} from "react-native";
import {useState} from "react";
import {tabelTaxePlatiteTextStyle} from "../utils/styles";
const {height, width} = Dimensions.get('window');


export default function TabelNote({userGrades}) {
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
                borderRadius:10,
                boxShadow: `0px ${height*0.01} ${height*0.02} #02407315`,
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
                                paddingRight:width*0.02
                            }}
                        >
                            <View style={{
                                width:width*0.145,
                                marginLeft:width*0.02,
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
                        </Text></View>


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
                                }}>
                                    DISCIPLINA
                                </Text>
                            </View>

                            <View style={{
                                width:width*0.11,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    fontSize:height*0.014,
                                    fontFamily: 'Montserrat',
                                    color: '#FFF',
                                    fontWeight: "500",
                                    justifyContent:"center",
                                    textAlignVertical:"center",
                                    alignSelf:"center",
                                    alignItems:"center",
                                }}>
                                    NOTA
                                </Text>
                            </View>


                            <View style={{
                                width:width*0.21,
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
                                    NR. CREDITE
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
                                    DATA
                                </Text>
                            </View>


                        </View>

                        <ScrollView
                            contentContainerStyle={{
                                paddingBottom:height*0.02,
                                alignItems:"flex-start",
                                justifyContent:"flex-start"
                            }}>

                            {userGrades.map((userGrade,index) => (
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
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.02
                                    }}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {userGrade.number}
                                        </Text>
                                    </View>

                                    <View style={{
                                        width: width*0.2,
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius:5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {userGrade.course}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.11,
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {userGrade.grade}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.21,
                                        minHeight: rowHeights[index] || height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015
                                    }}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {userGrade.credits}
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
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {userGrade.date}
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