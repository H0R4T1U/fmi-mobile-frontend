import {ImageBackground, Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";
import styles from '../../utils/styles/buildings.styles';

export default function BuildingContainer({name, image, address, route}) {
    const router = useRouter();
    return (
        <View style={styles.buildingMainView}>
            <Pressable onPress={() => {router.navigate(route);}}>
                <View style={styles.buildingImageAndTextView}>
                    <ImageBackground source={image} style={styles.buildingImage}>
                        <View style={styles.buildingTextView}/>
                        <View style={styles.buildingNameView}>
                            <Text style={styles.buildingNameText}>{name}</Text>
                        </View>
                        <View style={styles.buildingAddressView}>
                            <Text style={styles.buildingAddressText}>{address}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </Pressable>
        </View>
    )
}