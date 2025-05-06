import {Dimensions, ImageBackground, Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";
const {height, width} = Dimensions.get('window');


export default function AcademicContainer({name, image,route}) {
    const router = useRouter();
    return (
        <View style={{
            alignItems: "center",
            paddingTop: height*0.014,
        }}>
            <Pressable onPress={() => {
                router.push(route);
            }}>
                <ImageBackground source={image} style={{
                    height: height*0.128,
                    width: width*0.86,
                    borderRadius:10,
                    overflow: "hidden",
                    borderWidth: width*0.0025,
                    borderColor: '#024073',
                    justifyContent: 'flex-end',
                    paddingBottom: '1.5%',
                    boxShadow: `0px ${height*0.0051} ${height*0.001} #02407315`
                }}>
                    <View style={{
                        backgroundColor: "rgba(2, 64, 115, 1)",
                        height: '23%',
                        width: width*0.35,
                        borderRadius: 5,
                        marginLeft:width*0.024,
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: height*0.018,
                            fontFamily: 'Montserrat',
                            fontWeight: "500",
                            color: '#fff',
                            textAlign: 'center',
                            textAlignVertical: 'center'
                        }}>
                            {name}
                        </Text>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    )
}