import {Text, View} from "react-native";
import styles from '../../utils/styles/common.styles';

export default function FloatingHeader({text}) {
    return (
        <View style={styles.floatingHeaderView}>
            <Text style={styles.floatingHeaderText}>{text}</Text>
        </View>
    );
}