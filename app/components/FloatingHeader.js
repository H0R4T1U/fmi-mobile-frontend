import {Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";

export default function FloatingHeader({text}) {
    return (
        <View style={{
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#AEB9C4",
            borderRadius: scaleWidth(15),
            height: scaleHeight(70),
            width: scaleWidth(390),
            top: scaleHeight(-10),
            marginLeft: scaleWidth(10),
            marginRight: scaleWidth(10),
            justifyContent: "center",
            shadowColor: "#024073",
            shadowOffset: {width: 0, height: scaleHeight(4)},
            shadowOpacity: 0.1,
            shadowRadius: scaleHeight(0.7),
        }}>
            {<Text style={{
                fontFamily: 'Montserrat',
                fontSize: scaleHeight(26),
                color: '#002E54',
                fontWeight: '600',
            }}>{text}</Text>}
        </View>
    )
}