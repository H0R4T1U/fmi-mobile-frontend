import {Text, View} from "react-native";
import styles from '../../utils/styles/orar.styles';

export default function OrarPageMateriaContainer({disciplina,orastart,orafinal,frecventa,sala,formatia,tipul,prof}){
    const renderRow = (title, value) => (
        <View style={styles.materieRowStyle}>
            <Text style={styles.materieTextStyle}>{title}</Text>
            <Text style={styles.materieValueStyle}>{value}</Text>
        </View>
    );

    const frecventaText = frecventa === 0 ? 'Saptamanal' : (frecventa === 2 ? 'Saptamana para' : 'Saptamana impara');

    return (
        <View>
            <View style={styles.materieMainView}>
                <Text style={styles.materieText}>{disciplina} | {orastart} - {orafinal}</Text>
            </View>
            {renderRow('Frecventa', frecventaText)}
            {renderRow('Sala', sala)}
            {renderRow('Formatia', formatia)}
            {renderRow('Tipul', tipul)}
            {renderRow('Cadrul didactic', prof)}
        </View>
    );
}