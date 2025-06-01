import {Dimensions, ScrollView, Text, View,} from "react-native";
import React, {useState} from "react";
const {height, width} = Dimensions.get('window');
import {LayoutChangeEvent} from "react-native";
import styles from '../../utils/styles/academic/taxe_platite.styles'

const tableHeaders = [
    { key: "number", name: "NR. CRT", style: { width: width * 0.145, marginLeft: width * 0.02 } },
    { key: "series", name: "SERIA", style: { width: width * 0.165 } },
    { key: "paymentNumber", name: "NUMARUL", style: { width: width * 0.2 } },
    { key: "date", name: "DATA", style: { width: width * 0.2 } },
    { key: "price", name: "VALOARE", style: { width: width * 0.19 } },
    { key: "description", name: "EXPLICATIE", style: { width: width * 0.26 } },
    { key: "message", name: "MESAJ", style: { width: width * 0.16 } },
];
export default function TabelTaxePlatite({taxePlatite}) {
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
                            {tableHeaders.map((header, index) => (
                                <View key={index} style={[styles.headerItemView, header.style]}>
                                    <Text style={styles.headerItemText}>{header.name}</Text>
                                </View>
                            ))}
                        </View>
                        <ScrollView contentContainerStyle={styles.scrollView}>
                            {taxePlatite.map((taxa, index) => (
                                <View
                                    key={index}
                                    onLayout={(event) => handleTextLayout(index, event)}
                                    style={[styles.taxaView, {minHeight: rowHeights[index] || height * 0.035}]}
                                >
                                    {tableHeaders.map((header, colIndex) => (
                                        <View
                                            key={colIndex}
                                            style={[styles.textView, header.style, { minHeight: rowHeights[index] || height * 0.035 }]}>
                                            <Text style={styles.text}>{taxa[header.key]}</Text>
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