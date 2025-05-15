import FloatingHeader from "../../components/common/FloatingHeader";
import SemestreDropDown from "../../components/academic/SemestreDropDown";
import {useState} from "react";
import {Dimensions} from "react-native";
import TabelPrezente from "../../components/academic/TabelPrezente";
import MateriiDropDown from "../../components/academic/MateriiDropDown";

const {height, width} = Dimensions.get('window');

export default function PrezenteScreen() {
    const [selectedMaterie, setSelectedMaterie] = useState(null);
    return (
        <>
        <FloatingHeader text="PREZENTE"/>
        <MateriiDropDown onSelectSemester={setSelectedMaterie}/>
        <TabelPrezente examene={[]}/>
        </>
    );
}