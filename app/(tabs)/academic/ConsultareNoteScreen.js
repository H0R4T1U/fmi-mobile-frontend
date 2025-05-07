import FloatingHeader from "../../components/common/FloatingHeader";
import {ActivityIndicator, Text, View} from "react-native";
import SemestreDropDown from "../../components/academic/SemestreDropDown";
import TabelExamene from "../../components/academic/TabelExamene";
import TabelNote from "../../components/academic/TabelNote";
import Constants from "expo-constants";
import {useRouter} from "expo-router";
import React, {useCallback, useEffect, useState} from "react";
import {CacheManager} from "../../utils/CacheManager";
import LoadingView from "../../components/common/LoadingView";
import ErrorView from "../../components/common/ErrorView";
import useToken from "../../utils/useToken";

const { BACKEND } = Constants.expoConfig.extra;

export default function ConsultareNoteScreen() {
    const [userGrades, setUserGrades] = useState([]);
    const [gradesLoading, setGradesLoading] = useState(false);
    const [gradesError, setGradesError] = useState(null);
    const [selectedSemester, setSelectedSemester] = useState(null);
    const {token, tokenError, tokenLoading} = useToken();

    const loading = tokenLoading || gradesLoading;
    const error = tokenError || gradesError;

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                if (!token) return;
                setGradesLoading(true);
                const cachedUser = await CacheManager.get("loggedUser");
                const userMail=cachedUser.mail;
                const response = await fetch(`${BACKEND}/api/grades/${userMail}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseData = await response.json();
                if (responseData._embedded && responseData._embedded.gradesDTOList) {
                    setUserGrades(responseData._embedded.gradesDTOList);
                }
                else
                    setUserGrades([]);
            } catch (error) {
                setGradesError(error.message);
            } finally {
                setGradesLoading(false);
            }
        };
        fetchGrades();
    }, [token]);


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