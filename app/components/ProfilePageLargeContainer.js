import {Dimensions, Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
const {height, width} = Dimensions.get('window');

export default function ProfilePageLargeContainer({username, password}) {
    return (
        <View style={{
            backgroundColor: '#AEB9C4D7',
            marginTop: height*0.015,
            display: 'flex',
            flexDirection: 'column',
            height: height*0.24,
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
                marginBottom: height*0.011,
                height: height*0.045,
                width: width*0.37,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Text style={{
                    color: '#fff',
                }}>CREDENTIALE</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: height*0.02
            }}>
                <View style={{
                    backgroundColor: '#024073',
                    borderRadius: 5,
                    width: width*0.25,
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
                        USERNAME
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
                        {username}
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: scaleHeight(30)
            }}>
                <View style={{
                    backgroundColor: '#024073',
                    borderRadius: 5,
                    width: width*0.25,
                    height: height*0.035,
                    alignItems: 'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize: height*0.0145,
                        fontFamily: 'Montserrat',
                        color: '#fff',
                        textAlign: 'center'
                    }}>
                        PAROLĂ
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
                        {password}
                    </Text>
                </View>
            </View>
        </View>

    )
}