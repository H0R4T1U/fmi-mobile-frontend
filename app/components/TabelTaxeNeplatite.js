import {Alert, Dimensions, ImageBackground, Pressable, ScrollView, Text, View,} from "react-native";
import {useState} from "react";
import image from "../../assets/images/pay.png";
import PaymentModal from "./PaymentModal";
import {LayoutChangeEvent} from "react-native";
import {
    tabelTaxeNeplatiteHeaderTextStyle,
    tabelTaxeNeplatiteTextStyle,
    tabelTaxeNeplatiteViewStyle
} from "../utils/styles";
const {height, width} = Dimensions.get('window');

export default function TabelTaxeNeplatite({examene}) {
    const [rowHeights, setRowHeights] = useState({});
    const [selectedAmount, setSelectedAmount] = useState(null);

    const handleOpenPayment = (amount) => {
        setSelectedAmount(amount);
    };

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
                marginTop:height*0.01,
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
                                <Text style={tabelTaxeNeplatiteHeaderTextStyle(width, height)}>
                                    NR. CRT
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
                                <Text style={tabelTaxeNeplatiteHeaderTextStyle(width, height)}>
                                    TIP TAXA
                                </Text>
                            </View>

                            <View style={{
                                width:width*0.22,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={tabelTaxeNeplatiteHeaderTextStyle(width, height)}>
                                    DESCRIERE
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
                                <Text style={tabelTaxeNeplatiteHeaderTextStyle(width, height)}>
                                    AN UNIVERSITAR
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
                                <Text style={tabelTaxeNeplatiteHeaderTextStyle(width, height)}>
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
                                <Text style={tabelTaxeNeplatiteHeaderTextStyle(width, height)}>
                                    DATA SCADENTA
                                </Text>
                            </View>

                            <View style={{
                                width:width*0.15,
                                marginLeft:width*0.015,
                                backgroundColor: "#024073",
                                borderRadius: 5,
                                height:height*0.03,
                                alignSelf:"center",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={tabelTaxeNeplatiteHeaderTextStyle(width, height)}>
                                    PLATA
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
                                <Pressable
                                    key={index}
                                    onLayout={(event) => handleTextLayout(index, event)}
                                    style={{
                                        marginTop: height*0.011,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        minHeight:  rowHeights[index] ||height*0.035,
                                    }}
                                    onPress={() => handleOpenPayment(examen.price * 100)}
                                >
                                    <View style={[tabelTaxeNeplatiteViewStyle(width, height), {
                                        width: width*0.145,
                                        minHeight:  rowHeights[index] ||height*0.035,
                                        marginLeft:width*0.022,
                                    }]}>
                                        <Text style={tabelTaxeNeplatiteTextStyle(width, height)}>
                                            {examen.number}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxeNeplatiteViewStyle(width, height), {
                                        width: width*0.2,
                                        minHeight:  rowHeights[index] ||height*0.035,
                                        marginLeft:width*0.015,
                                    }]}>
                                        <Text style={tabelTaxeNeplatiteTextStyle(width, height)}>
                                            {examen.type}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxeNeplatiteViewStyle(width, height), {
                                        width: width*0.22,
                                        minHeight:  rowHeights[index] ||height*0.035,
                                        marginLeft:width*0.015,
                                    }]}>
                                        <Text style={tabelTaxeNeplatiteTextStyle(width, height)}>
                                            {examen.description}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxeNeplatiteViewStyle(width, height), {
                                        width: width*0.26,
                                        minHeight:  rowHeights[index] ||height*0.035,
                                        marginLeft:width*0.015,
                                    }]}>
                                        <Text style={tabelTaxeNeplatiteTextStyle(width, height)}>
                                            {examen.year}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxeNeplatiteViewStyle(width, height), {
                                        width:width*0.2,
                                        minHeight:  rowHeights[index] ||height*0.035,
                                        marginLeft:width*0.015,
                                    }]}>
                                        <Text style={tabelTaxeNeplatiteTextStyle(width, height)}>
                                            {examen.price}
                                        </Text>
                                    </View>
                                    <View style={[tabelTaxeNeplatiteViewStyle(width, height), {
                                        width: width*0.26,
                                        minHeight:  rowHeights[index] ||height*0.035,
                                        marginLeft:width*0.015,
                                    }]}>
                                        <Text style={tabelTaxeNeplatiteTextStyle(width, height)}>
                                            {examen.paymentTerm}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: width*0.15,
                                        minHeight:  rowHeights[index] ||height*0.035,
                                        backgroundColor: "#fff",
                                        borderRadius: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft:width*0.015,overflow:"hidden",
                                        // paddingVertical:height*0.005
                                    }}>
                                        <ImageBackground source={image} style={{width: width*0.15,
                                            height:height*0.075,
                                        }}>
                                        </ImageBackground>
                                    </View>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            {selectedAmount !== null && (
                <PaymentModal
                    visible={true}
                    amount={selectedAmount}
                    onClose={() => setSelectedAmount(null)}
                />
            )}
        </View>
    )
}