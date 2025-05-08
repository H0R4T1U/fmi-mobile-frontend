import {Dimensions, Text, View} from "react-native";

const {height, width} = Dimensions.get('window');

export default function FloatingHeader({text}) {
    return (
        <View style={{
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#AEB9C4",
            borderRadius: 15,
            height: height*0.08,
            width: width*0.94,
            top: -0.022*height,
            justifyContent: "center",
            boxShadow: '0px 4px 0.8px #02407315',
            marginBottom:height*-0.01
        }}>
            {<Text style={{
                fontFamily: 'Montserrat',
                fontSize: height*0.027,
                color: '#002E54',
                fontWeight: '600',
            }}>{text}</Text>}
        </View>
    )
}