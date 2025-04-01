import FloatingHeader from "../components/FloatingHeader";
import {View} from "react-native";
import SemestreDropDown from "../components/SemestreDropDown";
import TabelExamene from "../components/TabelExamene";
import {Examene} from "../utils/Examene";
import TabelNote from "../components/TabelNote";


export default function ConsultareNoteScreen() {
    return (
        <View>
            <FloatingHeader text="CONSULTARE NOTE"/>
            <SemestreDropDown/>
            <TabelNote examene={Examene}/>
        </View>
    )
}