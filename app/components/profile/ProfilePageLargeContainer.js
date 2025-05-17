import {Dimensions, Pressable, Text, TextInput, View,} from "react-native";
import {useState} from "react";
import { useTranslation } from 'react-i18next';


const {height, width} = Dimensions.get('window');


export default function ProfilePageLargeContainer({username, password}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {t}=useTranslation();
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
            boxShadow: '0px 4px 0.8px #02407315'
        }}>
            <View style={{
                backgroundColor: '#024073',
                marginBottom: height*0.007,
                height: height*0.045,
                width: width*0.37,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Text style={{
                    color: '#fff',
                    fontWeight:"600",
                    alignSelf:"center",
                    justifyContent:"center",
                    paddingHorizontal:width*0.01,
                    textAlign:"center"
                }}>{t('credentials')}</Text>
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
                    width: width*0.27,
                    height: height*0.035,
                    alignItems: 'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize: height*0.0147,
                        fontFamily: 'Montserrat',
                        fontWeight:"600",
                        color: '#fff',
                        textAlign: 'center'
                    }}>
                        {t('username')}
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
                        color: '#024073',
                        fontWeight:"500",
                    }}>
                        {username}
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: height * 0.025
            }}>
                <View style={{
                    backgroundColor: '#024073',
                    borderRadius: 5,
                    width: width*0.27,
                    height: height*0.035,
                    alignItems: 'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize: height*0.0145,
                        fontFamily: 'Montserrat',
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight:"600",
                    }}>
                        {t('password')}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <View style={{
                    backgroundColor: '#fff',
                    height: height*0.052,
                    width: width*0.48,
                    borderRadius: 5,
                    marginLeft: width*0.03,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                        <TextInput style={{
                            fontSize: height*0.016,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            textAlignVertical: 'center',
                            fontWeight:"500",
                            textAlign: 'center',
                            flex: 1,
                            includeFontPadding: false
                        }} value={password}
                           editable={false}
                           secureTextEntry={!isPasswordVisible}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
        </View>
    )
}