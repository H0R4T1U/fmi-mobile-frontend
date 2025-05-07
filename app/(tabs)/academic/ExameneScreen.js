import FloatingHeader from "../../components/common/FloatingHeader";
import SemestreDropDown from "../../components/academic/SemestreDropDown";
import TabelExamene from "../../components/academic/TabelExamene";
import React, {useEffect, useState} from "react";
import {CacheManager} from "../../utils/CacheManager";
import Constants from "expo-constants";
import LoadingView from "../../components/common/LoadingView";
import ErrorView from "../../components/common/ErrorView";
import useToken from "../../utils/useToken";
const { BACKEND } = Constants.expoConfig.extra;

export default function ExameneScreen() {
    const [examene, setExamene] = useState([]);
    const [exameneLoading, setExameneLoading] = useState(false);
    const [exameneError, setExameneError] = useState(null);
    const [selectedSemester, setSelectedSemester] = useState(null);
    const {token, tokenError, tokenLoading} = useToken();

    const loading = tokenLoading || exameneLoading;
    const error = tokenError || exameneError;

    useEffect(() => {
        const fetchExamene = async () => {
            try {
                if (!token) return;
                setExameneLoading(true);
                const cachedUser = await CacheManager.get("loggedUser");
                const userMail=cachedUser.mail;
                const response = await fetch(`${BACKEND}/api/exams/${userMail}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                if (responseData._embedded && responseData._embedded.examsDTOList) {
                    setExamene(responseData._embedded.examsDTOList);
                }
                else
                    setExamene([]);
            } catch (error) {
                setExameneError(error.message);
            } finally {
                setExameneLoading(false);
            }
        };
        fetchExamene();
    }, [token]);

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