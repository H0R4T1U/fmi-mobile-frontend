import {Dimensions, ScrollView, Text, View, TouchableOpacity} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
import {useState} from "react";
import OrarPageMateriaContainer from "./OrarPageMaterieContainer";

const {height, width} = Dimensions.get('window');

export default function OrarContainer({orar,zi}) {
    const [open, setOpen] = useState(false);

    return (
        <View style={{
            backgroundColor: '#FFF',
            borderStyle: "solid",
            borderColor: "#AEB9C4D7",
            borderWidth: 0.5,
            marginTop: height * 0.015,
            borderRadius: 10,
            boxShadow: '0px 4px 0.8px #02407315',
            width: width * 0.90,
        }}>

            <TouchableOpacity
                onPress={() => setOpen(!open)}
                style={{
                    backgroundColor: '#024073',
                    height: height * 0.06,
                    width: width * 0.90,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: "#024073",
                    borderWidth: 0.5,
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontWeight: "bold",
                    fontSize: height * 0.020,
                    letterSpacing: 2,
                    fontFamily: 'Montserrat',
                }}>
                    {zi}
                </Text>
            </TouchableOpacity>

            {open && (
                <View style={{alignItems: "center"}}>
                    <View style={{
                        backgroundColor: "#fff",
                        width: width * 0.899,
                        boxShadow: '0px 4px 0.8px #02407315',
                        overflow: "hidden",
                        marginTop: height*0.005,
                        borderRadius: 5,
                    }}>
                        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                            <View>
                                <ScrollView nestedScrollEnabled={true} style={{height:(height*0.05)+(height*0.045)*5}} showsVerticalScrollIndicator={false}>
                                    {orar.sort((ora1, ora2) => ora1.startHour - ora2.startHour).map((orari,index) => (
                                        <OrarPageMateriaContainer key={index} disciplina={orari.courseInstanceName} orastart={orari.startHour} orafinal={orari.endHour} frecventa={orari.frequency} sala={orari.room} formatia={orari.formation} tipul={orari.classType} prof={orari.teacher} />
                                        ))}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )}
        </View>
    )
}
