import FloatingHeader from "../../components/common/FloatingHeader";
import SemestreDropDown from "../../components/academic/dropdowns/SemestreDropDown";
import TabelExamene from "../../components/academic/tables/TabelExamene";
import React, {useState} from "react";
import Constants from "expo-constants";
import LoadingView from "../../components/common/LoadingView";
import ErrorView from "../../components/common/ErrorView";
import useToken from "../../utils/hooks/useToken";
import useFetch from "../../utils/hooks/useFetch";
import {useTranslation} from "react-i18next";

const { BACKEND } = Constants.expoConfig.extra;

export default function ExameneScreen() {
    const {t} = useTranslation();
    const [selectedSemester, setSelectedSemester] = useState("1");
    const {token, tokenError, tokenLoading} = useToken();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address:`${BACKEND}/api/exams`,
        hasToken: true
    });

    const loading = tokenLoading || dataLoading;
    const error = tokenError || dataError;
    const examene = data || [];

    const filteredExams = selectedSemester
        ? examene.filter(examen => examen.semester === parseInt(selectedSemester))
        : examene;

    if (loading)
        return <LoadingView headerText={t("exams").toString().toUpperCase()}/>;

    if (error)
        return <ErrorView error={error} headerText={t("exams").toString().toUpperCase()}/>

    return (
        <>
            <FloatingHeader text={t("exams").toString().toUpperCase()}/>
            <SemestreDropDown onSelectSemester={setSelectedSemester}/>
            <TabelExamene examene={filteredExams}/>
        </>
    )
}