import FloatingHeader from "../../components/common/FloatingHeader";
import SemestreDropDown from "../../components/academic/SemestreDropDown";
import {useState} from "react";
import {Dimensions} from "react-native";
import TabelPrezente from "../../components/academic/TabelPrezente";

const {height, width} = Dimensions.get('window');

export default function PrezenteScreen() {
    const [selectedSemester, setSelectedSemester] = useState(null);
    return (
        <>
        <FloatingHeader text="PREZENTE"/>
        <SemestreDropDown onSelectSemester={setSelectedSemester}/>
        <TabelPrezente examene={[]}/>
        </>
    );
}