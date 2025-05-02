import {Dimensions, ScrollView, Text, View,} from "react-native";
import {useState} from "react";
const {height, width} = Dimensions.get('window');
import {tabelExameneHeaderTextStyle, tabelExameneDataTextStyle, tabelExameneDataViewStyle} from '../utils/styles';
import {LayoutChangeEvent} from "react-native";

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
                boxShadow: `0px ${height*0.01} ${height*0.02} #02407315`,
                overflow:"hidden"
            }}>
                    <ScrollView horizontal={true}>
                        <View>
                            <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#AEB9C4",
                                borderRadius: 10,
                                height:height*0.045,
                                alignItems:"center",
                                justifyContent:"center",
                            }}
                        >
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {marginLeft:width*0.013, width:width*0.145}]}>
                                NR. CRT
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.207}]}>
                                TIP SESIUNE
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.175}]}>
                                TIP DATA
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.215}]}>
                                TIP EXAMEN
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.205}]}>
                                DATA
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.158}]}>
                                ORA
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.15}]}>
                                DURATA
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.2}]}>
                                SALA
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.22}]}>
                                EXAMINATOR
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {width:width*0.203}]}>
                                DISCIPLINA
                            </Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), {
                                marginRight:width*0.012,
                                width:width*0.13
                            }]}>
                                GRUPA
                            </Text>
                        </View>

                        <ScrollView
                            contentContainerStyle={{
                                paddingBottom: height * 0.15,
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
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width * 0.145,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                        <Text style={tabelExameneDataTextStyle(width, height)}>
                                            {examen.number}
                                        </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.207,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.sessionType}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width:width*0.175,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.dateType}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.215,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.type}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.205,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.date}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.158,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.date}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.15,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.duration}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.2,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.room}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.22,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.teacher}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.203,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.course}
                                    </Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width*0.13,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                    <Text style={tabelExameneDataTextStyle(width, height)}>
                                        {examen.group}
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