import {Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../app/ScaleFunction";

export default function FloatingHeader({text}) {
    return (
        <View>
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
                zIndex: 1,
                overflow: "hidden",
                justifyContent: "center",
            }}>
                {<Text style={{
                    fontFamily: 'Montserrat',
                    fontSize: scaleHeight(26),
                    color: '#002E54',
                    fontWeight: 600,

                }}>{text}</Text>}
            </View>
        </View>
    )
}