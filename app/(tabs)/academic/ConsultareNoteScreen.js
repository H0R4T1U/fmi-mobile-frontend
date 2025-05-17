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

const { BACKEND } = Constants.expoConfig.extra;

export default function ConsultareNoteScreen() {
    const [selectedSemester, setSelectedSemester] = useState("1");
    const {token, tokenError, tokenLoading} = useToken();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address: `${BACKEND}/api/grades`
    });

    const loading = tokenLoading || dataLoading;
    const error = tokenError || dataError;
    const userGrades = data || [];
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