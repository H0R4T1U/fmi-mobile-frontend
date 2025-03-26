import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import AcademicContainer from "../components/AcademicContainer";
import note from "../../assets/images/note.png";
import taxe from "../../assets/images/taxe.png";
import examene from "../../assets/images/examene.png";

export default function AcademicScreen() {
    return (
        <>
            <FloatingHeader text="ACADEMIC"/>
            <AcademicContainer name="Taxe" image={taxe}/>
            <AcademicContainer name="Examene" image={examene}/>
            <AcademicContainer name="Consultare Note" image={note}/>
        </>
    );
}