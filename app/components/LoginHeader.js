import {View, Text, Dimensions, TouchableOpacity} from "react-native";
import {useFonts} from "expo-font";
import {useEffect, useState} from "react";
import {CacheManager} from "../utils/CacheManager";
const {width, height} = Dimensions.get('window');

export default function LoginHeader() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            const cachedUser = await CacheManager.get("loggedUser");
            setUser(cachedUser);
        };
        fetchUser();
    }, []);
    useFonts({'Peddana': require('../../assets/fonts/Peddana-Regular.ttf')});

    return (
        <View style={{
            backgroundColor: '#024073',
            height: height * 0.13,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: height * 0.05
        }}>
            <Text style={{
                fontFamily: 'Peddana',
                fontSize: height * 0.03,
                color: '#F5F5F6'
            }}>Universitatea Babes-Bolyai</Text>
            <Text style={{
                fontFamily: 'Peddana',
                fontSize: height * 0.025,
                color: '#A0C9FF',
                marginTop: -height * 0.021
            }}>Facultatea de Matematica si Informatica</Text>
        </View>
    );
}