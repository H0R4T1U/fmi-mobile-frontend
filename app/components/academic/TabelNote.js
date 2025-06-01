import {Dimensions, LayoutChangeEvent, ScrollView, Text, View} from "react-native";
import {useState} from "react";
import styles from '../../utils/styles/academic/note.styles';

const { height, width } = Dimensions.get("window");

const tableHeaders = [
    { key: "number", name: "NR. CRT", style: { width: width * 0.145, marginLeft: width * 0.016 } },
    { key: "course", name: "DISCIPLINA", style: { width: width * 0.21 } },
    { key: "grade", name: "NOTA", style: { width: width * 0.11 } },
    { key: "credits", name: "NR. CREDITE", style: { width: width * 0.22 } },
    { key: "date", name: "DATA", style: { width: width * 0.19 } }
];

export default function TabelNote({ userGrades }) {
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
                <View>
                    <View style={styles.headerView}>
                        {tableHeaders.map((header, index) => (
                            <View key={index} style={[styles.headerItemView, header.style]}>
                                <Text style={styles.headerItemText}>{header.name}</Text>
                            </View>
                        ))}
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollView}>
                        {userGrades.map((userGrade, index) => (
                            <View
                                key={index}
                                onLayout={(event) => handleTextLayout(index, event)}
                                style={[styles.elementView, {minHeight: rowHeights[index] || height * 0.035}]}>
                                {tableHeaders.map((header, colIndex) => (
                                    <View key={colIndex} style={[styles.itemView, header.style, { minHeight: rowHeights[index] || height * 0.035 }]}>
                                        <Text style={styles.itemText}>{userGrade[header.key]}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </View>

            </View>
        </View>
    );
}
