import { Dimensions, ScrollView, Text, View } from "react-native";
import { useState } from "react";
const { height, width } = Dimensions.get("window");
import {
    tabelExameneHeaderTextStyle,
    tabelExameneDataTextStyle,
    tabelExameneDataViewStyle,
} from "../../utils/styles";
import { LayoutChangeEvent } from "react-native";

const exameneHeader = [
    { key: "number", name: "NR. CRT", style: { marginLeft: width * 0.013, width: width * 0.145 } },
    { key: "sessionType", name: "TIP SESIUNE", style: { width: width * 0.207 } },
    { key: "dateType", name: "TIP DATA", style: { width: width * 0.2 } },
    { key: "type", name: "TIP EXAMEN", style: { width: width * 0.215 } },
    { key: "date", name: "DATA", style: { width: width * 0.218 } },
    { key: "hour", name: "ORA", style: { width: width * 0.158 } },
    { key: "duration", name: "DURATA", style: { width: width * 0.15 } },
    { key: "room", name: "SALA", style: { width: width * 0.22 } },
    { key: "teacher", name: "EXAMINATOR", style: { width: width * 0.22 } },
    { key: "course", name: "DISCIPLINA", style: { width: width * 0.203 } },
    { key: "group", name: "GRUPA", style: { width: width * 0.13, marginRight: width * 0.012 } },
];

export default function TabelExamene({ examene }) {
    const [rowHeights, setRowHeights] = useState({});

    const handleTextLayout = (index: number, event: LayoutChangeEvent) => {
        const height = event.nativeEvent.layout.height;
        setRowHeights((prevHeights) => ({
            ...prevHeights,
            [index]: Math.max(prevHeights[index] || 0, height),
        }));
    };

    return (
        <View style={{ alignItems: "center", paddingTop: height * 0.015, paddingHorizontal: width * 0.02 }}>
            <View
                style={{
                    backgroundColor: "rgba(174,185,196,0.49)",
                    borderStyle: "solid",
                    borderColor: "#AEB9C4",
                    borderWidth: 0.5,
                    height: height * 0.6,
                    width: width * 0.95,
                    borderRadius: 10,
                    boxShadow: `0px ${height * 0.01} ${height * 0.02} #02407315`,
                    overflow: "hidden",
                }}
            >
                <ScrollView horizontal={true}>
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#AEB9C4",
                                borderRadius: 10,
                                height: height * 0.045,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {exameneHeader.map((item, index) => (
                                <Text key={index} style={[tabelExameneHeaderTextStyle(width, height), item.style]}>
                                    {item.name}
                                </Text>
                            ))}
                        </View>

                        <ScrollView
                            contentContainerStyle={{
                                paddingBottom: height * 0.15,
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                            }}
                        >
                            {examene.map((examen, index) => (
                                <View
                                    key={index}
                                    onLayout={(event) => handleTextLayout(index, event)}
                                    style={{
                                        marginTop: height * 0.01,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }}
                                >
                                    {exameneHeader.map((col, colIndex) => (
                                        <View
                                            key={colIndex}
                                            style={[
                                                tabelExameneDataViewStyle(width, height),
                                                {
                                                    ...col.style,
                                                    minHeight: rowHeights[index] || height * 0.1,
                                                },
                                            ]}
                                        >
                                            <Text style={tabelExameneDataTextStyle(width, height)}>
                                                {examen[col.key]}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
