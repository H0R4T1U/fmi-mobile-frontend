import {Alert, Dimensions, Pressable, Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
const {height, width} = Dimensions.get('window');

export default function NewsContainer({title, description}) {
return (
    <View style={{
        alignItems: "center",
        paddingTop: height*0.014,
        shadowColor: "#024073",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 0.7,
    }}>
        <Pressable onPress={() => {Alert.alert(title)}}>
            {/* containerul mare*/}
            <View style={{
                backgroundColor: "#AEB9C47D",
                width: width*0.86,
                borderRadius:10,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: '#AEB9C4',
                height: height*0.126,
                marginHorizontal: width*0.01,
            }}>
                {/* container titlul anuntului*/}
                <View style={{

                    marginTop: height*0.0113,
                    marginLeft: width*0.025,
                    justifyContent: "center",
                    alignItems:"flex-start"

                }}>
                    <Text style={{
                        backgroundColor: "rgba(2, 64, 115, 1)",
                        fontSize: height*0.0165,
                        borderRadius: 5,
                        paddingHorizontal:width*0.015,
                        paddingVertical:height*0.004,
                        fontFamily: 'Montserrat',
                        fontWeight: "500",
                        color: '#fff',

                    }}>
                        {title}
                    </Text>
                </View>

                {/* container descrierea anuntului*/}
                <View style={{
                    backgroundColor: "#AEB9C4",
                    marginHorizontal: width*0.025,
                    marginVertical: height*0.01,
                    borderRadius: 5,
                    height: height*0.062,
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