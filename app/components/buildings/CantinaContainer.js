import {Alert, ImageBackground, Linking, Pressable, Text, View} from "react-native";
import styles from '../../utils/styles/buildings.styles';

export default function CantinaContainer({image,name,location,program, link}) {
    return (
        <Pressable onPress={() => {
            Alert.alert(
                `Open in browser?`,
                `FMIHub wants to open "${link}" in a browser`,
                [
                    {text: 'Cancel', style: 'cancel',},
                    {text: 'Open', onPress: () => {Linking.openURL(link);}}
                ],
                { cancelable: true }
            );
        }}>
        <View style={styles.cantinaMainView}>
                <View style={styles.cantinaImageAndText}>
                    <ImageBackground source={image} style={styles.cantinaImage}>
                        <View style={styles.cantinaBackground} />
                        <View style={styles.cantinaTitleView}>
                            <Text style={styles.cantinaTitleText}>{name}</Text>
                        </View>
                        <View style={styles.cantinaLocationView}>
                            <Text style={styles.cantinaLocationLeft}>Locatie:</Text>
                            <Text style={styles.cantinaLocationRight}>{location}</Text>
                        </View>
                        <View style={styles.cantinaProgramView}>
                            <Text style={styles.cantinaProgramLeft}>Program:</Text>
                            <Text style={styles.cantinaProgramRight}>{program}</Text>
                        </View>
                    </ImageBackground>
                </View>
        </View>
        </Pressable>
    );
}