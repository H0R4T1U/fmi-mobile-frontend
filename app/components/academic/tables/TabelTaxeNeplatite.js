import {Dimensions, ImageBackground, Pressable, ScrollView, Text, View,} from "react-native";
import React, {useEffect, useState} from "react";
import image from "../../../../assets/images/pay.png";
import {LayoutChangeEvent} from "react-native";
import AddCardModal from "../PaymentModal";
const {height, width} = Dimensions.get('window');
import styles from '../../../utils/styles/academic/taxe_neplatite.styles';

const tableHeaders = [
    { key: "number", name: "NR. CRT", style: { width: width * 0.145, marginLeft: width * 0.022 } },
    { key: "type", name: "TIP TAXA", style: { width: width * 0.2 } },
    { key: "description", name: "DESCRIERE", style: { width: width * 0.22 } },
    { key: "year", name: "AN UNIVERSITAR", style: { width: width * 0.28 } },
    { key: "price", name: "VALOARE", style: { width: width * 0.2 } },
    { key: "paymentTerm", name: "DATA SCADENTA", style: { width: width * 0.28 } },
];

export default function TabelTaxeNeplatite({examene,refetchAll}) {
    const [rowHeights, setRowHeights] = useState({});
    const [selectedAmount, setSelectedAmount] = useState(null);
    const[tuitioncrt,setTuitionCrt]=useState(null);
    const[paid,setpaid]=useState(false);


    const handleOpenPayment = (amount,tuitioncrt) => {setSelectedAmount(amount); setTuitionCrt(tuitioncrt)}

    const handleTextLayout = (index: number, event: LayoutChangeEvent) => {
        const height = event.nativeEvent.layout.height;
        setRowHeights((prevHeights) => ({
            ...prevHeights,
            [index]: Math.max(prevHeights[index] || 0, height),
        }));
    };


    useEffect(() => {
        if (paid) {
            refetchAll?.();
            setpaid(false);
        }
    }, [paid]);


    return (
        <View style={styles.mainView}>
            <View style={styles.view}>
                <ScrollView horizontal={true}>
                    <View>
                        <View style={styles.headerView}>
                            {tableHeaders.map((header, index) => (
                                <View key={index} style={[styles.headerItemView, header.style]}>
                                    <Text style={styles.headerText}>{header.name}</Text>
                                </View>
                            ))}
                            <View
                                style={[styles.headerItemView, { width: width * 0.15 }]}>
                                <Text style={styles.headerText}>PLATA</Text>
                            </View>
                        </View>
                        <ScrollView
                            contentContainerStyle={styles.contentContainerStyle}>
                            {examene.map((examen, index) => (
                                <Pressable
                                    key={index}
                                    onLayout={(event) => handleTextLayout(index, event)}
                                    onPress={() => handleOpenPayment(examen.price,examen.number )}
                                    style={[styles.pressable, {minHeight: rowHeights[index] || height * 0.035}]}>
                                    {tableHeaders.map((header, colIndex) => (
                                        <View
                                            key={colIndex}
                                            style={[styles.textView, header.style, { minHeight: rowHeights[index] || height * 0.035 }]}>
                                            <Text style={styles.text}>{examen[header.key]}</Text>
                                        </View>
                                    ))}
                                    <View style={[styles.imageView, {minHeight: rowHeights[index] || height * 0.035}]}>
                                        <ImageBackground source={image} style={styles.image}/>
                                    </View>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            {selectedAmount !== null && (
                <AddCardModal
                    visible={true}
                    amount={selectedAmount}
                    tuitionCrt={tuitioncrt}
                    setsuccess={setpaid}
                    onClose={()=>
                        setSelectedAmount(null)
                    }
                />
            )}
        </View>
    );
}