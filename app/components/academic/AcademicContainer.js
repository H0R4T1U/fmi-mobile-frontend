import {ImageBackground, Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";
import styles from '../../utils/styles/dropdowns.styles';


export default function AcademicContainer({name, image,route}) {
    const router = useRouter();
    return (
        <View style={styles.mainView}>
            <Pressable onPress={() => router.push(route)}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.nameView}>
                        <Text style={styles.nameText}>{name}</Text>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    )
}