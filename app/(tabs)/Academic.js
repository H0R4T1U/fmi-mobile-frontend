import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import AcademicContainer from "../components/AcademicContainer";
import note from "../../assets/images/note.png";
import taxe from "../../assets/images/taxe.png";
import examene from "../../assets/images/examene.png";
import {View} from "react-native";

export default function Academic() {
    return (
        <View style={{backgroundColor: '#fff'}}>
            <FloatingHeader text="ACADEMIC"/>
            <>
                <AcademicContainer name="Taxe" image={taxe} route="TaxeScreen"/>
                <AcademicContainer name="Examene" image={examene} route="ExameneScreen"/>
                <AcademicContainer name="Consultare Note" image={note} route="ConsultareNoteScreen"/>
            </>
        </View>
    );
}