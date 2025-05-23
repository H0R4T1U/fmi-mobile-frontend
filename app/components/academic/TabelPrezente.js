import {Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import { useState } from "react";
const { height, width } = Dimensions.get("window");
import { LayoutChangeEvent } from "react-native";
import styles from '../../utils/styles/academic/prezente.styles';

const prezenteHeader = [
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

    const [prezente, setPrezente] = useState([
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
        setPrezente((prev) => {
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
                return "#024073";
            case "MOTIVAT":
                return "#024073";
            case "ABSENT":
                return "#e44c49";
            default:
                return "#ffffff";
        }
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.view}>
                <View>
                    <View style={styles.headerView}>
                        {prezenteHeader.map((item, index) => (
                            <Text key={index} style={[styles.headerText, item.style]}>{item.name}</Text>
                        ))}
                    </View>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        {prezente.map((examen, index) => (
                            <View
                                key={index}
                                onLayout={(event) => handleTextLayout(index, event)}
                                style={styles.header}
                            >
                                {prezenteHeader.map((col, colIndex) =>{
                                    const isClickable = col.key === "laborator" || col.key === "seminar";
                                    const value = examen[col.key];
                                    const color = getStatusColor(value);
                                    return (
                                        <TouchableOpacity
                                            key={colIndex}
                                            disabled={!isClickable}
                                            onPress={() => isClickable && toggleStatus(index, col.key)}
                                            style={[styles.dataView, {...col.style, minHeight: height * 0.065}]}>
                                            <Text style={[styles.itemText, isClickable && { color, fontWeight: "bold" }]}>{value}</Text>
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
