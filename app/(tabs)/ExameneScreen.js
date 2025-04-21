import FloatingHeader from "../components/FloatingHeader";
import {View} from "react-native";
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