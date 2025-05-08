import FloatingHeader from "../../components/common/FloatingHeader";
import {View} from "react-native";
import SemestreDropDown from "../../components/academic/SemestreDropDown";
import TabelNote from "../../components/academic/TabelNote";
import Constants from "expo-constants";
import React, {useState} from "react";
import LoadingView from "../../components/common/LoadingView";
import ErrorView from "../../components/common/ErrorView";
import useToken from "../../utils/hooks/useToken";
import useFetch from "../../utils/hooks/useFetch";
import useEmail from "../../utils/hooks/useEmail";

const { BACKEND } = Constants.expoConfig.extra;

export default function ConsultareNoteScreen() {
    const [selectedSemester, setSelectedSemester] = useState(null);
    const {token, tokenError, tokenLoading} = useToken();
    const {mail, mailError, mailLoading} = useEmail();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address: `${BACKEND}/api/grades/${mail}`
    });

    const loading = tokenLoading || dataLoading || mailLoading;
    const error = tokenError || dataError || mailError;
    const userGrades = data?.gradesDTOList || [];
    const filteredGrades = selectedSemester
        ? userGrades.filter(grade => grade.semester === parseInt(selectedSemester))
        : userGrades;

    if (loading)
        return <LoadingView headerText="NOTE"/>;

    if (error)
        return <ErrorView error={error} headerText="NOTE"/>;

    return (
        <View>
            <FloatingHeader text="CONSULTARE NOTE"/>
            <SemestreDropDown onSelectSemester={setSelectedSemester}/>
            <TabelNote userGrades={filteredGrades}/>
        </View>
    )
}