import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import OrarPageMateriaContainer from "./OrarPageMaterieContainer";
import styles from '../../utils/styles/orar.styles';

export default function OrarContainer({orar,zi}) {
    const [open, setOpen] = useState(false);
    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={() => setOpen(!open)} style={styles.button}>
                <Text style={styles.dayText}>{zi}</Text>
            </TouchableOpacity>
            {open && (
                <View style={styles.timeTableMainView}>
                    <View style={styles.timeTableScrollView}>
                        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                            <View>
                                {
                                    orar.length ===0 ? (
                                        <Text style={styles.timeTableText}>Nu exista ore programate pentru aceasta zi.</Text>
                                    ):(
                                        <ScrollView nestedScrollEnabled={true} style={styles.nestedScrollView} showsVerticalScrollIndicator={false}>
                                            {orar.sort((ora1, ora2) => ora1.startHour - ora2.startHour).map((orari,index) => (
                                                <OrarPageMateriaContainer key={index} disciplina={orari.courseInstanceName} orastart={orari.startHour} orafinal={orari.endHour} frecventa={orari.frequency} sala={orari.room} formatia={orari.formation} tipul={orari.classType} prof={orari.teacher} />
                                            ))}
                                        </ScrollView>
                                    )
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )}
        </View>
    );
}
