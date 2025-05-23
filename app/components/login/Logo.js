import {Image, Text, View} from "react-native";
import styles from '../../utils/styles/login.styles';

export default function Logo() {
    return (
        <View style={styles.mainView}>
            <View style={styles.imageAllTextView}>
                <View style={styles.imageAndTitleView}>
                    <Image source={require('../../../assets/images/cs-logo.png')} style={styles.image}/>
                    <View style={styles.titleView}>
                        <View style={styles.textView}>
                            <Text style={styles.leftText}>FMI</Text>
                            <Text style={styles.rightText}>Hub</Text>
                        </View>
                        <Text style={styles.sloganText}>traditio et excellentia</Text>
                    </View>
                </View>
                <Text style={styles.copyrightText}>ALL RIGHTS RESERVED (C) 2025</Text>
            </View>
        </View>
    )
}