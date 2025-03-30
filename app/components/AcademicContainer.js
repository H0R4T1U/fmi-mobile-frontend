import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
import {Alert, ImageBackground, Pressable, Text, View} from "react-native";
import {useNavigation} from "expo-router";

export default function AcademicContainer({name, image,route}) {
    const navigation = useNavigation();
    return (
        <View style={{
            alignItems: "center",
            paddingTop: scaleHeight(13),
            shadowColor: "#024073",
            shadowOpacity: 0.1,
            shadowRadius: scaleHeight(0.7),
            shadowOffset: {height: scaleHeight(4)},
        }}>
            <Pressable onPress={() => navigation.navigate(route)}>
                <ImageBackground source={image} style={{
                    height: scaleHeight(115),
                    marginHorizontal: scaleWidth(20),
                    width: scaleWidth(350),
                    borderRadius: scaleWidth(10),
                    overflow: "hidden",
                    borderWidth: scaleWidth(1),
                    borderColor: '#024073'
                }}>
                    <View style={{
                        backgroundColor: "rgba(2, 64, 115, 1)",
                        height: scaleHeight(26),
                        width: scaleWidth(140),
                        borderRadius: scaleWidth(5),
                        marginTop: scaleWidth(75),
                        marginLeft: scaleWidth(10),
                        justifyContent: "center",
                    }}>
                        <Text style={{
                            fontSize: scaleHeight(16),
                            fontFamily: 'Montserrat',
                            fontWeight: "500",
                            color: '#fff',
                            alignSelf: "center",
                        }}>
                            {name}
                        </Text>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    )
}