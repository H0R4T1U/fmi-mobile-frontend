import { Dimensions, ScrollView, Text, View } from "react-native";
import { useState } from "react";
const { height, width } = Dimensions.get("window");

import { LayoutChangeEvent } from "react-native";
import styles from '../../../utils/styles/academic/examene.styles';

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
        <View style={styles.mainView}>
            <View style={styles.view}>
                <ScrollView horizontal={true}>
                    <View>
                        <View style={styles.headerView}>
                            {exameneHeader.map((item, index) => (
                                <Text key={index} style={[styles.headerText, item.style]}>{item.name}</Text>
                            ))}
                        </View>
                        <ScrollView contentContainerStyle={styles.scrollView}>
                            {examene.map((examen, index) => (
                                <View
                                    key={index}
                                    onLayout={(event) => handleTextLayout(index, event)}
                                    style={[styles.elementView, {minHeight: rowHeights[index] || height * 0.1}]}>
                                    {exameneHeader.map((col, colIndex) => (
                                        <View key={colIndex} style={[styles.dataView, {...col.style, minHeight: rowHeights[index] || height * 0.1}]}>
                                            <Text style={styles.dataText}>{examen[col.key]}</Text>
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
