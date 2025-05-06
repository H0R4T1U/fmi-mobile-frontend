import {Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
const {height, width} = Dimensions.get('window');
import {tabelExameneHeaderTextStyle, tabelExameneDataTextStyle, tabelExameneDataViewStyle} from '../../utils/styles';
import {LayoutChangeEvent} from "react-native";

const examene = [
    {
        number: 1,
        sessionType: 'MPP',
        dateType: 'SEMINAR',
        weeks: ['green', '', '', '', '', '', '', '', '', '', '', '', '', '']
    },
    {
        number: 2,
        sessionType: 'AI',
        dateType: 'LABORATOR',
        weeks: ['', 'red', '', '', '', '', '', '', '', '', '', '', '', '']
    },
    {
        number: 3,
        sessionType: 'SGBD',
        dateType: 'SEMINAR',
        weeks: ['', '', 'green', '', '', '', '', '', '', '', '', '', '', '']
    },
];

const weeks = Array.from({length: 14}, (_, i) => `SAPTAMANA ${i + 1}`);

export default function TabelPrezente() {
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
            <View style={{
                backgroundColor: "rgba(174,185,196,0.49)",
                borderStyle: "solid",
                borderColor: "#AEB9C4",
                borderWidth: 0.5,
                height: height * 0.6,
                width: width * 0.95,
                borderRadius: 10,
                boxShadow: `0px ${height * 0.01} ${height * 0.02} #02407315`,
                overflow: "hidden"
            }}>
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
                            <Text style={[tabelExameneHeaderTextStyle(width, height), { marginLeft: width * 0.013, width: width * 0.145 }]}>NR. CRT</Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), { width: width * 0.207 }]}>MATERIE</Text>
                            <Text style={[tabelExameneHeaderTextStyle(width, height), { width: width * 0.25 }]}>TIP ACTIVITATE</Text>
                            {weeks.map((week, index) => (
                                <Text
                                    key={index}
                                    style={[
                                        tabelExameneHeaderTextStyle(width, height),
                                        { width: width * 0.22, ...(index === weeks.length - 1 ? { marginRight: width * 0.22 } : {}) }
                                    ]}
                                >
                                    {week}
                                </Text>
                            ))}
                        </View>

                        <ScrollView contentContainerStyle={{ paddingBottom: height * 0.15 }}>
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
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width * 0.145,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                        <Text style={tabelExameneDataTextStyle(width, height)}>{examen.number}</Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width * 0.207,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                        <Text style={tabelExameneDataTextStyle(width, height)}>{examen.sessionType}</Text>
                                    </View>
                                    <View style={[tabelExameneDataViewStyle(width, height), {
                                        width: width * 0.25,
                                        minHeight: rowHeights[index] || height * 0.1,
                                    }]}>
                                        <Text style={tabelExameneDataTextStyle(width, height)}>{examen.dateType}</Text>
                                    </View>

                                    {examen.weeks.map((weekColor, weekIndex) => (
                                        <TouchableOpacity key={weekIndex}>
                                            <View style={[tabelExameneDataViewStyle(width, height), {
                                                width: width * 0.22,
                                                minHeight: rowHeights[index] || height * 0.1,
                                                backgroundColor: weekColor || 'transparent',
                                                ...(weekIndex === weeks.length - 1 ? { marginRight: width * 0.22 } : {})
                                            }]}>
                                                {weekColor ? (
                                                    <Text style={tabelExameneDataTextStyle(width, height)}>{weekColor}</Text>
                                                ) : null}
                                            </View>
                                        </TouchableOpacity>
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
