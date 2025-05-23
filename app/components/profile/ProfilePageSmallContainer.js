import {ScrollView, Text, View} from "react-native";
import styles from '../../utils/styles/profile_containers.styles'

export default function ProfilePageSmallContainer({title, content}) {
    return (
        <View style={styles.smallContainerMainView}>
            <View style={styles.smallContainerTextView}>
                <Text style={styles.smallContainerText}> {title} </Text>
            </View>
            <View style={styles.smallContainerScrollView}>
                <ScrollView horizontal={true} >
                    <Text style={styles.smallContainerScrollText}> {content} </Text>
                </ScrollView>
            </View>
        </View>
    )
}