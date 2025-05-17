import {Dimensions, ScrollView, Text, View} from "react-native";

const {height, width} = Dimensions.get('window');

export default function ProfilePageSmallContainer({title, content}) {
    return (
        <View style={{
            backgroundColor: '#AEB9C4D7',
            marginTop: height*0.015,
            display: 'flex',
            flexDirection: 'row',
            height: height*0.075,
            width: width*0.86,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 4px 0.8px #02407315'
        }}>
            <View style={{
                backgroundColor: '#024073',
                borderRadius: 5,
                width:width*0.27,
                height: height*0.035,
                alignItems: 'center',
                justifyContent:'center'
            }}>

                <Text style={{
                    fontSize: height*0.0147,
                    fontFamily: 'Montserrat',
                    fontWeight:"600",
                    color: '#fff',
                    textAlign: 'center',

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
                <ScrollView horizontal={true} >
                    <Text style={{
                        fontSize: height*0.016,
                        fontFamily: 'Montserrat',
                        fontWeight:"500",
                        color: '#024073',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        alignSelf:"center"
                    }}>
                        {content}
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}