import { ImageBackground, Text, View} from "react-native";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";


export default function LegendaSaliContainer() {
    return (
        <View style={{alignItems: "center", paddingTop: scaleHeight(13)}}>
            <View style={{
                backgroundColor:"rgba(174,185,196,0.49)",
                borderStyle:"solid",
                borderColor:"#AEB9C4",
                borderWidth:0.5,
                height: scaleHeight(390),
                marginHorizontal: scaleWidth(20),
                width: scaleWidth(350),
                borderRadius: scaleWidth(10),
                shadowColor: "#024073",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: scaleHeight(4) },
                shadowRadius: scaleHeight(0.7),
            }}>

                    <View style={{

                        marginTop: scaleHeight(15),
                        marginLeft: scaleWidth(10),
                        justifyContent: "center",
                        alignItems:"center"
                    }}>
                        <Text style={{
                            backgroundColor: "#AEB9C4",
                            borderRadius: scaleWidth(5),
                            paddingVertical: scaleHeight(4),
                            paddingHorizontal: scaleWidth(10),
                            fontSize: scaleHeight(15),
                            fontFamily: 'Montserrat',
                            fontWeight: "600",
                            color: '#024073',

                        }}>
                            LEGENDA SALILOR


                        </Text>
                    </View>
                    <View style={{
                        marginTop: scaleHeight(20),
                        marginLeft: scaleWidth(10),
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            backgroundColor: "#024073",
                            borderRadius: scaleWidth(5),
                            fontSize: scaleHeight(12),
                            fontFamily: 'Montserrat',
                            color: '#FFF',
                            paddingVertical: scaleHeight(4),
                            paddingHorizontal: scaleWidth(35),
                            fontWeight:"500"
                        }}>
                            SALA
                        </Text>

                        <Text style={{
                            backgroundColor: "#024073",
                            borderRadius: scaleWidth(5),
                            fontSize: scaleHeight(12),
                            fontFamily: 'Montserrat',
                            color: '#FFF',
                            paddingVertical: scaleHeight(4),
                            paddingHorizontal: scaleWidth(72),
                            marginLeft: scaleWidth(10),
                            fontWeight:"500"
                        }}>
                            LOCALIZARE

                        </Text>
                    </View>



            </View>

        </View>
    )
}