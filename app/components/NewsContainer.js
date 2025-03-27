import {Alert, Pressable, Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";

export default function NewsContainer({title, description}) {
return (
    <View style={{
        alignItems: "center",
        paddingTop: scaleHeight(13),
        shadowColor: "#024073",
        shadowOffset: {width: 0, height: scaleHeight(4)},
        shadowOpacity: 0.1,
        shadowRadius: scaleHeight(0.7),
    }}>
        <Pressable onPress={() => {Alert.alert(title)}}>
            {/* containerul mare*/}
            <View style={{
                backgroundColor: "#AEB9C47D",
                width: scaleWidth(350),
                borderRadius: scaleWidth(10),
                overflow: "hidden",
                borderWidth: scaleWidth(1),
                borderColor: '#AEB9C4',
                height: scaleHeight(110),
                marginHorizontal: scaleWidth(20),
            }}>
                {/* container titlul anuntului*/}
                <View style={{
                    backgroundColor: "rgba(2, 64, 115, 1)",
                    height: scaleHeight(26),
                    width: scaleWidth(170),
                    borderRadius: scaleWidth(5),
                    marginTop: scaleHeight(10),
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
                        {title}
                    </Text>
                </View>

                {/* container descrierea anuntului*/}
                <View style={{
                    backgroundColor: "#AEB9C4",
                    marginHorizontal: scaleWidth(10),
                    marginVertical: scaleHeight(7),
                    borderRadius: scaleWidth(5),
                    height: scaleHeight(55),
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text>
                        {description}
                    </Text>
                </View>
            </View>
        </Pressable>
    </View>
)
}