import FloatingHeader from "../../components/common/FloatingHeader";
import {useState} from "react";
import {Dimensions} from "react-native";
import TabelPrezente from "../../components/academic/TabelPrezente";
import MateriiDropDown from "../../components/academic/MateriiDropDown";
import {useTranslation} from "react-i18next";

const {height, width} = Dimensions.get('window');

export default function PrezenteScreen() {
    const [selectedMaterie, setSelectedMaterie] = useState(null);
    const {t} = useTranslation();
    return (
        <>
        <FloatingHeader text={t("attendances").toUpperCase()}/>
        <MateriiDropDown onSelectSemester={setSelectedMaterie}/>
        <TabelPrezente examene={[]}/>
        </>
    );
}