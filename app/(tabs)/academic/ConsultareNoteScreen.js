import FloatingHeader from "../../components/common/FloatingHeader";
import {View} from "react-native";
import SemestreDropDown from "../../components/academic/dropdowns/SemestreDropDown";
import TabelNote from "../../components/academic/tables/TabelNote";
import Constants from "expo-constants";
import React, {useState} from "react";
import LoadingView from "../../components/common/LoadingView";
import ErrorView from "../../components/common/ErrorView";
import useToken from "../../utils/hooks/useToken";
import useFetch from "../../utils/hooks/useFetch";
import {useTranslation} from "react-i18next";

const { BACKEND } = Constants.expoConfig.extra;

export default function ConsultareNoteScreen() {
    const {t} = useTranslation();
    const [selectedSemester, setSelectedSemester] = useState("1");
    const {token, tokenError, tokenLoading} = useToken();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address: `${BACKEND}/api/grades`,
        hasToken: true
    });

    const loading = tokenLoading || dataLoading;
    const error = tokenError || dataError;
    const userGrades = data || [];
    const filteredGrades = selectedSemester
        ? userGrades.filter(grade => grade.semester === parseInt(selectedSemester))
        : userGrades;

    if (loading)
        return <LoadingView headerText={t("grades").toString().toUpperCase()}/>;

    if (error)
        return <ErrorView error={error} headerText={t("grades").toString().toUpperCase()}/>;

    return (
        <View>
            <FloatingHeader text={t("grades").toString().toUpperCase()}/>
            <SemestreDropDown onSelectSemester={setSelectedSemester}/>
            <TabelNote userGrades={filteredGrades}/>
        </View>
    )
}