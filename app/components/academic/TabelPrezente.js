import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState, useMemo } from "react";
import styles from "../../utils/styles/academic/prezente.styles";

const { height, width } = Dimensions.get("window");

export default function TabelPrezente({ examene, setPrezente, tipuri = {} }) {

    const STATUS_OPTIONS = ["PREZENT", "MOTIVAT", "ABSENT"];

    const prezenteHeader = useMemo(() => {
        const headers = [{ key: "week", name: "SAPTAMANA" }];

        if (tipuri?.showLaborator) {
            headers.push({ key: "laborator", name: "LABORATOR" });
        }

        if (tipuri?.showSeminar) {
            headers.push({ key: "seminar", name: "SEMINAR" });
        }

        return headers.map(header => ({
            ...header,
            style: { flex:1, minWidth:0 }
        }));
    }, [tipuri?.showLaborator, tipuri?.showSeminar]);


    const toggleStatus = (index, field) => {
        setPrezente((prev) => {
            const currentValue = prev[index][field] || "";
            const newValue = getNextStatus(currentValue);
            const updated = [...prev];
            updated[index] = { ...updated[index], [field]: newValue };
            return updated;
        });
    };

    const getNextStatus = (current) => {
        const idx = STATUS_OPTIONS.indexOf(current.toUpperCase());
        return STATUS_OPTIONS[(idx + 1) % STATUS_OPTIONS.length];
    };

    const getStatusColor = (status) => {
        if (!status || typeof status !== "string") return "#000000";
        switch (status.toUpperCase()) {
            case "PREZENT":
                return "#024073";
            case "MOTIVAT":
                return "#024073";
            case "ABSENT":
                return "#e44c49";
            default:
                return "#000000";
        }
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.view}>
                <View>
                    <View style={styles.headerView}>
                        {prezenteHeader.map((item, index) => (
                            <Text key={index} style={[styles.headerText, item.style]}>
                                {item.name}
                            </Text>
                        ))}
                    </View>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        {examene.map((examen, index) => (
                            <View key={index} style={styles.header}>
                                {prezenteHeader.map((col, colIndex) => {
                                    const isClickable = col.key === "laborator" || col.key === "seminar";
                                    const value = examen[col.key] || "";
                                    const color = getStatusColor(value);

                                    return (
                                        <TouchableOpacity
                                            key={colIndex}
                                            disabled={!isClickable}
                                            onPress={() => isClickable && toggleStatus(index, col.key)}
                                            style={[styles.dataView, {flex: 1, minWidth: 0, minHeight: height * 0.065 }]}
                                        >
                                            <Text style={[styles.itemText, isClickable && { color, fontWeight: "bold" }]}>
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