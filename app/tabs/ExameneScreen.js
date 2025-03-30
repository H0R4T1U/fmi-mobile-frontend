import FloatingHeader from "../components/FloatingHeader";
import CantinaContainer from "../components/CantinaContainer";
import image from "../../assets/images/cantina.avif";
import {View} from "react-native";
import {Picker} from "react-native-web";
import {useState} from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
import SemestreDropDown from "../components/SemestreDropDown";
import TabelExamene from "../components/TabelExamene";
import {Examene} from "../utils/Examene";


export default function ExameneScreen() {
    return (
        <View>
            <FloatingHeader text="EXAMENE"/>
            <SemestreDropDown/>
            <TabelExamene examene={Examene}/>
        </View>
    )
}