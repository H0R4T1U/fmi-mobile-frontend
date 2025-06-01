import {Dimensions, ScrollView, Text, View} from "react-native";
const {height} = Dimensions.get('window');
import styles from '../../utils/styles/buildings.styles';

export default function LegendaSaliContainer({ rooms }) {
    return (
        <View style={styles.mainView}>
            <View style={[styles.contentView, {height:(height*0.106)+rooms.length*(height*0.04)+rooms.length*(height*0.015)}]}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>LEGENDA SĂLILOR</Text>
                </View>
                <View style={styles.headerView}>
                    <Text style={styles.salaText}>SALA</Text>
                    <Text style={styles.localizareText}>LOCALIZARE</Text>
                </View>
                <ScrollView style={styles.mainScrollView}>
                    {rooms.map((room, index) => (
                        <View key={index} style={styles.saliView}>
                            <Text style={styles.salaValue}>{room.sala}</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={{ alignItems: "center"}} >
                                <Text style={styles.localizareValue}>{room.localizare}</Text>
                            </ScrollView>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}