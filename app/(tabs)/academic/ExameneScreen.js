import FloatingHeader from "../../components/common/FloatingHeader";
import SemestreDropDown from "../../components/academic/SemestreDropDown";
import TabelExamene from "../../components/academic/TabelExamene";
import React, {useState} from "react";
import Constants from "expo-constants";
import LoadingView from "../../components/common/LoadingView";
import ErrorView from "../../components/common/ErrorView";
import useToken from "../../utils/hooks/useToken";
import useEmail from "../../utils/hooks/useEmail";
import useFetch from "../../utils/hooks/useFetch";

const { BACKEND } = Constants.expoConfig.extra;

export default function ExameneScreen() {
    const [selectedSemester, setSelectedSemester] = useState(null);
    const {token, tokenError, tokenLoading} = useToken();
    const {mail, mailError, mailLoading} = useEmail();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address:`${BACKEND}/api/exams/${mail}`
    });

    const loading = tokenLoading || mailLoading || dataLoading;
    const error = tokenError || mailError || dataError;
    const examene = data?.examsDTOList || [];
    const filteredExams = selectedSemester
        ? examene.filter(examen => examen.semester === parseInt(selectedSemester))
        : examene;

    if (loading)
        return <LoadingView headerText="EXAMENE"/>;

    if (error)
        return <ErrorView error={error} headerText="EXAMENE"/>

    return (
        <>
            <FloatingHeader text="EXAMENE"/>
            <SemestreDropDown onSelectSemester={setSelectedSemester}/>
            <TabelExamene examene={filteredExams}/>
        </>
    )
}