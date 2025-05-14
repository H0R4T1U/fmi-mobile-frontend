import {Dimensions, Image, Text, View} from "react-native";
import {useFonts} from "expo-font";

export default function Logo() {
    const {width, height} = Dimensions.get('window');
    useFonts({'Peddana': require('../../../assets/fonts/Peddana-Regular.ttf')});
    return (
        <View style={{
            justifyContent: 'flex-end',
            flex: 1,
            paddingBottom: height * 0.03
        }}>
        <View style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 4,
        }}>
            <View style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Image source={require('../../../assets/images/cs-logo.png')} style={{
                    height: height * 0.12,
                    width: width * 0.22,
                    resizeMode: 'contain'
                }}/>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginLeft: width * 0.05
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            fontFamily: 'Peddana',
                            color: '#024073',
                            fontSize: height * 0.07
                        }}>FMI</Text>
                        <Text style={{
                            fontFamily: 'Peddana',
                            color: '#5A81A3',
                            fontSize: height * 0.07
                        }}>Hub</Text>
                    </View>
                    <Text style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'italic',
                        fontWeight: '100',
                        fontSize: height * 0.016,
                        marginTop: -height * 0.035,
                        opacity: 0.4,
                        letterSpacing: 1
                    }}>traditio et excellentia</Text>
                </View>
            </View>
            <Text style={{
                fontFamily: 'Peddana',
                fontSize: height * 0.017,
            }}>ALL RIGHTS RESERVED (C) 2025</Text>
        </View>
        </View>
    )
}