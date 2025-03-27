import {Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";

export default function ProfilePageLargeContainer({username, password}) {
    return (
        <View style={{
            backgroundColor: '#AEB9C4D7',
            marginTop: scaleHeight(10),
            display: 'flex',
            flexDirection: 'column',
            height: scaleHeight(220),
            width: scaleHeight(350),
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
                marginBottom: scaleHeight(10),
                height: scaleHeight(35),
                width: scaleWidth(150),
                borderRadius: scaleWidth(5),
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
                marginTop: scaleHeight(15)
            }}>
                <View style={{
                    backgroundColor: '#024073',
                    borderRadius: scaleWidth(5),
                    width: scaleWidth(100),
                    height: scaleHeight(28),
                    alignItems: 'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize: scaleWidth(14),
                        fontFamily: 'Montserrat',
                        color: '#fff',
                        textAlign: 'center'
                    }}>
                        USERNAME
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
                    borderRadius: scaleWidth(5),
                    width: scaleWidth(100),
                    height: scaleHeight(28),
                    alignItems: 'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize: scaleWidth(14),
                        fontFamily: 'Montserrat',
                        color: '#fff',
                        textAlign: 'center'
                    }}>
                        PAROLĂ
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
                        {password}
                    </Text>
                </View>
            </View>
        </View>

    )
}