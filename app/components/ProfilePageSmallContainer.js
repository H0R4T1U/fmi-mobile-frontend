import {View, Text, Dimensions} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
const {height, width} = Dimensions.get('window');

export default function ProfilePageSmallContainer({title, content}) {
    return (
        <View style={{
            backgroundColor: '#AEB9C4D7',
            marginTop: height*0.015,
            display: 'flex',
            flexDirection: 'row',
            height: height*0.087,
            width: width*0.86,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: "#024073",
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.1,
            shadowRadius: 0.7,
        }}>
            <View style={{
                backgroundColor: '#024073',
                borderRadius: 5,
                width:width*0.25,
                height: height*0.035,
                alignItems: 'center',
                justifyContent:'center'
            }}>
                <Text style={{
                    fontSize: height*0.0147,
                    fontFamily: 'Montserrat',
                    color: '#fff',
                    textAlign: 'center'
                }}>
                    {title}
                </Text>
            </View>
            <View style={{
                backgroundColor: '#fff',
                height: height*0.052,
                width: width*0.48,
                borderRadius: 5,
                marginLeft: width*0.03,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: height*0.016,
                    fontFamily: 'Montserrat',
                    color: '#024073'
                }}>
                    {content}
                </Text>
            </View>
        </View>
    )
}