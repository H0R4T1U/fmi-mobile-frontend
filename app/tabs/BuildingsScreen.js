import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import BuildingContainer from "../components/BuildingContainer";
import centrala from "../../assets/images/centrala1.jpg";
import fsega from "../../assets/images/fsega1.jpg";
import drept from "../../assets/images/drept1.jpg";
import math from "../../assets/images/math1.jpg";
import creic from "../../assets/images/creic1.jpg";
import {ScrollView, View} from "react-native";
import ntt from "../../assets/images/ntt.jpg"
import observator from "../../assets/images/observator1.jpeg"
import litere from "../../assets/images/litere1.jpg"
import {scaleHeight} from "../utils/ScaleFunction";


export default function BuildingsScreen() {
    return (
        <View style={{backgroundColor:'#fff'}}>
            <FloatingHeader text="CLĂDIRI ȘI CANTINE"/>
            <ScrollView contentContainerStyle={{paddingBottom: scaleHeight(150)}}>
                <BuildingContainer name="Clădirea Centrală" image={centrala} address="Strada Mihail Kogălniceanu 1, Cluj-Napoca 400347" route='Central'/>
                <BuildingContainer name="FSEGA" image={fsega} address="Strada Teodor Mihali 58-60, Cluj-Napoca 400591" route='Fsega'/>
                <BuildingContainer name="Clădirea Avram Iancu" image={drept} address="Strada Avram Iancu 11, Cluj-Napoca 400089" route='Drept'/>
                <BuildingContainer name="Clădirea Mathematica" image={math} address="Strada Ploiești 23-25, Cluj-Napoca 400157" route='Mathematica'/>
                <BuildingContainer name="CREIC" image={creic} address="Strada Tiberiu Popoviciu 2-4, Cluj-Napoca 400647" route='Creic'/>
                <BuildingContainer name="NTT Data" image={ntt} address="Strada Constanța 19-21, Cluj-Napoca 400158" route='Ntt'/>
                <BuildingContainer name="Observatorul Astronomic" image={observator} address="Strada Cireșilor 19, Cluj-Napoca 400487" route='Observator'/>
                <BuildingContainer name="Clădirea DPPD" image={creic} address="Calea Moților 11, Cluj-Napoca 400001" route='Dppd'/>
                <BuildingContainer name="Facultatea de Litere" image={litere} address="Strada Horea 31, Cluj-Napoca 400394" route='Litere'/>
            </ScrollView>
        </View>
    )
}