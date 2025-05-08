import {Dimensions, LayoutChangeEvent, ScrollView, Text, View,} from "react-native";
import {useState} from "react";
import {
    tabelTaxePlatiteHeaderTextStyle,
    tabelTaxePlatiteHeaderViewStyle,
    tabelTaxePlatiteTextStyle,
    tabelTaxePlatiteViewStyle
} from "../../utils/styles";

const {height, width} = Dimensions.get('window');

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
                boxShadow: `0px ${height*0.01} ${height*0.02} #02407315`,
                marginTop:10,
                overflow: "hidden",
            }}>
                <ScrollView horizontal={true}>
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#AEB9C4",
                                borderRadius: 10,
                                height:height*0.045,
                                paddingRight:width*0.022
                            }}>
                            <View style={[tabelTaxePlatiteHeaderViewStyle(width, height), {
                                width:width*0.145,
                                marginLeft:width*0.022,
                            }]}>
                                <Text style={tabelTaxePlatiteHeaderTextStyle(width, height)}>
                                    NR. CRT
                                </Text>
                            </View>
                            <View style={[tabelTaxePlatiteHeaderViewStyle(width, height), {
                                width:width*0.165,
                            }]}>
                                <Text style={tabelTaxePlatiteHeaderTextStyle(width, height)}>
                                    SERIA
                                </Text>
                            </View>

                            <View style={[tabelTaxePlatiteHeaderViewStyle(width, height), {
                                width:width*0.2,
                            }]}>
                                <Text style={tabelTaxePlatiteHeaderTextStyle(width, height)}>
                                    NUMARUL
                                </Text>
                            </View>

                            <View style={[tabelTaxePlatiteHeaderViewStyle(width, height), {
                                width:width*0.2,
                            }]}>
                                <Text style={tabelTaxePlatiteHeaderTextStyle(width, height)}>
                                    DATA
                                </Text>
                            </View>

                            <View style={[tabelTaxePlatiteHeaderViewStyle(width, height), {
                                width:width*0.19,
                            }]}>
                                <Text style={tabelTaxePlatiteHeaderTextStyle(width, height)}>
                                    VALOARE
                                </Text>
                            </View>

                            <View style={[tabelTaxePlatiteHeaderViewStyle(width, height), {
                                width:width*0.26,
                            }]}>
                                <Text style={tabelTaxePlatiteHeaderTextStyle(width, height)}>
                                    EXPLICATIE
                                </Text>
                            </View>

                            <View style={[tabelTaxePlatiteHeaderViewStyle(width, height), {
                                width:width*0.16,
                            }]}>
                                <Text style={tabelTaxePlatiteHeaderTextStyle(width, height)}>
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
                                    <View style={[tabelTaxePlatiteViewStyle(width, height), {
                                        width: width*0.145,
                                        minHeight: rowHeights[index] ||height*0.035,
                                        marginLeft: width * 0.022
                                    }]}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {examen.number}
                                        </Text>
                                    </View>

                                    <View style={[tabelTaxePlatiteViewStyle(width, height), {
                                        width: width*0.165,
                                        minHeight: rowHeights[index] ||height*0.035,
                                    }]}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {examen.series}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxePlatiteViewStyle(width, height), {
                                        width: width*0.2,
                                        minHeight: rowHeights[index] || height*0.035,
                                    }]}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {examen.paymentNumber}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxePlatiteViewStyle(width, height), {
                                        width: width*0.2,
                                        minHeight: rowHeights[index] || height*0.035,
                                    }]}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {examen.date}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxePlatiteViewStyle(width, height), {
                                        width: width*0.19,
                                        minHeight: rowHeights[index] || height*0.035,
                                    }]}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {examen.price}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxePlatiteViewStyle(width, height), {
                                        width: width*0.26,
                                        minHeight: rowHeights[index] || height*0.035,
                                    }]}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {examen.description}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxePlatiteViewStyle(width, height), {
                                        width: width*0.16,
                                        minHeight: rowHeights[index] || height*0.035,
                                    }]}>
                                        <Text style={tabelTaxePlatiteTextStyle(width, height)}>
                                            {examen.message}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}