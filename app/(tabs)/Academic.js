import FloatingHeader from "../components/common/FloatingHeader";
import React from "react";
import AcademicContainer from "../components/academic/AcademicContainer";
import note from "../../assets/images/note.png";
import taxe from "../../assets/images/taxe.png";
import examene from "../../assets/images/examene.png";
import {View} from "react-native";

export default function Academic() {
    return (
        <View style={{backgroundColor: '#fff'}}>
            <FloatingHeader text="ACADEMIC"/>
            <>
                <AcademicContainer name="Taxe" image={taxe} route="/academic/TaxeScreen"/>
                <AcademicContainer name="Examene" image={examene} route="/academic/ExameneScreen"/>
                <AcademicContainer name="Consultare Note" image={note} route="/academic/ConsultareNoteScreen"/>
                <AcademicContainer name="Prezente" image={note} route="/academic/PrezenteScreen"/>
            </>
        </View>
    );
}