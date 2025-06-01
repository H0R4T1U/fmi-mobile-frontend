import {Pressable, Text, TextInput, View,} from "react-native";
import {useState} from "react";
import { useTranslation } from 'react-i18next';
import styles from '../../utils/styles/profile_containers.styles';

export default function ProfilePageLargeContainer({username, password}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {t} = useTranslation();
    return (
        <View style={styles.mainView}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}> {t('credentials')} </Text>
            </View>
            <View style={styles.usernameView}>
                <View style={styles.usernameLeftView}>
                    <Text style={styles.usernameLeftText}> {t('username')} </Text>
                </View>
                <View style={styles.usernameRightView}>
                    <Text style={styles.usernameRightText}> {username} </Text>
                </View>
            </View>
            <View style={styles.passwordView}>
                <View style={styles.passwordLeftView}>
                    <Text style={styles.passwordLeftText}> {t('password')} </Text>
                </View>
                <View style={styles.passwordRightView}>
                    <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <View style={styles.passwordInput}>
                                <TextInput style={styles.textInput} value={password}
                                   editable={false} secureTextEntry={!isPasswordVisible}/>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}