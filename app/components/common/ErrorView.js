import FloatingHeader from "./FloatingHeader";
import {Dimensions, Text, View} from "react-native";
import React from "react";

const {height} = Dimensions.get('window');

export default function ErrorView({error, headerText}) {
    return (
        <>
            <FloatingHeader text={headerText} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{
                    color: '#024073',
                    fontFamily: 'Montserrat',
                    fontSize: height * 0.015,
                    textAlign: 'center'
                }}>
                    {error}. Please try again later.
                </Text>
            </View>
        </>
    );
}