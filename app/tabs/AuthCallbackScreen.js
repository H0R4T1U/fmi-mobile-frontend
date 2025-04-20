import {useEffect} from "react";
import {useNavigation} from "expo-router";
import {ActivityIndicator, Linking, View} from "react-native";
import tw from "twrnc";

const AuthCallbackScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Handle the OAuth response here
        const handleAuthResponse = async () => {
            const url = await Linking.getInitialURL();
            if (url) {
                navigation.navigate('Home');
            }
        };

        handleAuthResponse();
    }, []);

    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <ActivityIndicator size="large" />
        </View>
    );
};