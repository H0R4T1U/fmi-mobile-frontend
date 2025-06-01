import {Text, View} from "react-native";
import styles from '../../utils/styles/login.styles';

export default function LoginHeader() {
    return (
        <View style={styles.headerMainView}>
            <Text style={styles.headerTopText}> Universitatea Babes-Bolyai </Text>
            <Text style={styles.headerBottomText}> Facultatea de Matematica si Informatica </Text>
        </View>
    );
}