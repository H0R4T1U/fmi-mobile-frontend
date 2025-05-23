import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, Text, Dimensions} from 'react-native';
import i18n from "../../assets/translation/translationConfig.js";
const { width, height } = Dimensions.get("window");

const languages = [
    { code: 'ro', flag: '🇷🇴' },
    { code: 'en', flag: '🇬🇧' },
    { code: 'de', flag: '🇩🇪' },
    { code: 'hu', flag: '🇭🇺' }
];

export default function LanguageSwitcher() {
    const [index, setIndex] =  useState(languages.findIndex(l => l.code === i18n.language) || 0);

    const changeLanguage = () => {
        const nextIndex = (index + 1) % languages.length;
        setIndex(nextIndex);
        i18n.changeLanguage(languages[nextIndex].code);
    };

    useEffect(() => {
        const currentIndex = languages.findIndex(l => l.code === i18n.language);
        if (currentIndex !== index) {
            setIndex(currentIndex);
        }
    }, [i18n.language]);

    return (
        <TouchableOpacity onPress={changeLanguage} style={{ marginTop: 10 ,alignItems:"flex-start",width:width, paddingLeft:width*0.05,paddingTop:height*0.02}}>
            <Text style={{ fontSize: height*0.04, alignSelf:"flex-start",fontFamily:"Montserrat"}}>
               {languages[index].flag}
            </Text>
        </TouchableOpacity>
    );
}
