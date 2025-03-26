import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import BuildingContainer from "../components/BuildingContainer";
import centrala from "../../assets/images/centrala.jpg";
import fsega from "../../assets/images/fsega.jpg";
import drept from "../../assets/images/drept.jpg";
import math from "../../assets/images/math.jpg";
import creic from "../../assets/images/creic.jpg";
import {ScrollView} from "react-native";


export default function BuildingsScreen() {
    return (
        <>
            <FloatingHeader text="CLĂDIRI ȘI CANTINE"/>
            <ScrollView>
                <BuildingContainer name="Clădirea Centrală" image={centrala} address="Strada Mihail Kogălniceanu 1, Cluj-Napoca 400347"/>
                <BuildingContainer name="FSEGA" image={fsega} address="Strada Teodor Mihali 58-60, Cluj-Napoca 400591"/>
                <BuildingContainer name="Clădirea Avram Iancu" image={drept} address="Strada Avram Iancu 11, Cluj-Napoca 400089"/>
                <BuildingContainer name="Clădirea Mathematica" image={math} address="Strada Ploiești 23-25, Cluj-Napoca 400157"/>
                <BuildingContainer name="CREIC" image={creic} address="Strada Tiberiu Popoviciu 2-4, Cluj-Napoca 400647"/>
            </ScrollView>
        </>
    )
}