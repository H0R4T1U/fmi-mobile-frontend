import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import {Dimensions, ScrollView, View} from "react-native";
import OrarContainer from "../components/OrarContainer";
import {Examene} from "../utils/Examene";
import {Orar} from "../utils/Orar";
const {height, width} = Dimensions.get('window');


export default function HomeScreen() {
    const zile = ["LUNI", "MARȚI", "MIERCURI", "JOI", "VINERI"];

    return (
        <View style={{backgroundColor:'#fff',alignItems:"center"}}>
            <FloatingHeader text="ORAR"/>

            return (
            <ScrollView

                contentContainerStyle={{
                    alignItems: 'center',
                    paddingBottom:height*0.1
                }}
            >
                {zile.map((zi, index) => (
                    <View key={index} style={{ marginBottom: 20 }}>
                        <OrarContainer
                            orar={Orar || []}
                            zi={zi}
                        />
                    </View>
                ))}
            </ScrollView>
            );
        </View>
    );
}