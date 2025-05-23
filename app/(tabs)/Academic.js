import FloatingHeader from "../components/common/FloatingHeader";
import React from "react";
import AcademicContainer from "../components/academic/AcademicContainer";
import note from "../../assets/images/note.png";
import taxe from "../../assets/images/taxe.png";
import examene from "../../assets/images/examene.png";
import {View} from "react-native";
import style from '../utils/styles/tabs.styles.js'
import {useTranslation} from "react-i18next";

export default function Academic() {
    const {t} = useTranslation();
    return (
        <View style={style.mainView}>
            <FloatingHeader text={t("academic").toString().toUpperCase()}/>
            <AcademicContainer name={t("fees")} image={taxe} route="/academic/TaxeScreen"/>
            <AcademicContainer name={t("exams")} image={examene} route="/academic/ExameneScreen"/>
            <AcademicContainer name={t("grades")} image={note} route="/academic/ConsultareNoteScreen"/>
            <AcademicContainer name={t("attendances")} image={note} route="/academic/PrezenteScreen"/>
        </View>
    );
}