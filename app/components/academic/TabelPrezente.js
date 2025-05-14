import {Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import { useState } from "react";
const { height, width } = Dimensions.get("window");
import {
    tabelExameneHeaderTextStyle,
    tabelExameneDataTextStyle,
    tabelExameneDataViewStyle,
} from "../../utils/styles";
import { LayoutChangeEvent } from "react-native";

const exameneHeader = [
    { key: "week", name: "SAPTAMANA", style: {  width: width * 0.3 } },
    { key: "laborator", name: "LABORATOR", style: { width: width * 0.3 } },
    { key: "seminar", name: "SEMINAR", style: {width: width * 0.3 } },

];

export default function TabelPrezente() {
    const [rowHeights, setRowHeights] = useState({});

    const handleTextLayout = (index: number, event: LayoutChangeEvent) => {
        const height = event.nativeEvent.layout.height;
        setRowHeights((prevHeights) => ({
            ...prevHeights,
            [index]: Math.max(prevHeights[index] || 0, height),
        }));
    };

    const [examene, setExamene] = useState([
        {
            number: 1,
            week: "1",
            laborator: 'PREZENT',
            seminar: 'MOTIVAT',
        },
        {
            number: 2,
            week: "2",
            laborator: 'ABSENT',
            seminar: 'PREZENT',
        },
        {
            number: 3,
            week: "3",
            laborator: 'PREZENT',
            seminar: 'PREZENT',
        },
    ]);

    const STATUS_OPTIONS = ["PREZENT", "MOTIVAT", "ABSENT"];

    const toggleStatus = (index: number, field: "laborator" | "seminar") => {
        setExamene((prev) => {
            const newValue = getNextStatus(prev[index][field]);
            const updated = [...prev];
            updated[index] = { ...updated[index], [field]: newValue };
            return updated;
        });
    };

    const getNextStatus = (current: string) => {
        const idx = STATUS_OPTIONS.indexOf(current.toUpperCase());
        return STATUS_OPTIONS[(idx + 1) % STATUS_OPTIONS.length];
    };

    const getStatusColor = (status: string) => {
        switch (status.toUpperCase()) {
            case "PREZENT":
                return "#024073"; // green
            case "MOTIVAT":
                return "#024073"; // yellow
            case "ABSENT":
                return "#e44c49"; // red
            default:
                return "#ffffff";
        }
    };

    return (
        <View style={{ alignItems: "center", paddingTop: height * 0.015,  }}>
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

                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#AEB9C4",
                                borderRadius: 10,
                                height: height * 0.045,
                                width:width*0.95,
                                alignItems: "center",
                                justifyContent: "flex-start",

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
                                        //paddingHorizontal:width*0.005,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        minHeight:height * 0.01,
                                    }}
                                >
                                    {exameneHeader.map((col, colIndex) =>{
                                        const isClickable = col.key === "laborator" || col.key === "seminar";
                                        const value = examen[col.key];
                                        const color = getStatusColor(value);

                                        return (
                                            <TouchableOpacity
                                                key={colIndex}
                                                disabled={!isClickable}
                                                onPress={() => isClickable && toggleStatus(index, col.key)}
                                                style={[
                                                    tabelExameneDataViewStyle(width, height),
                                                {
                                                    ...col.style,
                                                    minHeight: height * 0.065,
                                                },
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        tabelExameneDataTextStyle(width, height),
                                                        isClickable && { color, fontWeight: "bold" },
                                                    ]}
                                                >
                                                    {value}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            ))}
                        </ScrollView>
                    </View>

            </View>
        </View>
    );
}
