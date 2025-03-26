import {View,Text} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";

export default function ProfilePageSmallContainer({title, content}) {
    return (
        <View style={{
            backgroundColor: '#AEB9C4D7',
            marginTop: scaleHeight(13),
            display: 'flex',
            flexDirection: 'row',
            height: scaleHeight(78),
            width: scaleWidth(350),
            borderRadius: scaleWidth(10),
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: "#024073",
            shadowOffset: {width: 0, height: scaleHeight(4)},
            shadowOpacity: 0.1,
            shadowRadius: scaleHeight(0.7),
        }}>
            <View style={{
                backgroundColor: '#024073',
                padding: scaleWidth(7),
                borderRadius: scaleWidth(5),
                width: scaleWidth(100),
                height: scaleHeight(28),
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: scaleWidth(14),
                    fontFamily: 'Montserrat',
                    color: '#fff',
                    wordWrap: 'break-word',
                }}>
                    {title}
                </Text>
            </View>
            <View style={{
                backgroundColor: '#fff',
                height: scaleHeight(45),
                width: scaleWidth(200),
                borderRadius: scaleWidth(5),
                marginLeft: scaleWidth(10),
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: scaleWidth(14),
                    fontFamily: 'Montserrat',
                    color: '#024073'
                }}>
                    {content}
                </Text>
            </View>
        </View>
    )
}