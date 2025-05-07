import FloatingHeader from "../../components/common/FloatingHeader";
import {ActivityIndicator, Text, View} from "react-native";
import SemestreDropDown from "../../components/academic/SemestreDropDown";
import TabelExamene from "../../components/academic/TabelExamene";
import TabelNote from "../../components/academic/TabelNote";
import Constants from "expo-constants";
import {useRouter} from "expo-router";
import React, {useCallback, useEffect, useState} from "react";
import {CacheManager} from "../../utils/CacheManager";

const { BACKEND } = Constants.expoConfig.extra;

export default function ConsultareNoteScreen() {

    const [token, setToken] = useState(null);
    const [userGrades, setUserGrades] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSemester, setSelectedSemester] = useState(null);


    useEffect(() => {
        const getToken = async () => {
            try {
                const storedToken = await CacheManager.get("token");
                setToken(storedToken);
            } catch (error) {
                console.error("Token retrieval failed:", error);
                setError("Authentication error");
            }
        };
        getToken();
        console.log("Retrieved token:", token);
    }, []);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                if (!token) return;

                const cachedUser = await CacheManager.get("loggedUser");
                const userMail=cachedUser.mail;
                setLoading(true);
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
                console.error("Grades fetch failed:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (token) fetchGrades();
    }, [token]);


    const filteredGrades = selectedSemester
        ? userGrades.filter(grade => grade.semester === parseInt(selectedSemester))
        : userGrades;

    if (loading)
            return (
                <>
                    <FloatingHeader text="NOTE"/>
                    <ActivityIndicator size="small" style={{
                        flex: 1
                    }}/>
                </>
            );
    if (error)
        return (
            <>
                <FloatingHeader text="NOTE"/>
                <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#024073', fontFamily: 'Montserrat', fontSize: height * 0.015, textAlign: 'center', textAlignVertical: 'center'}}>{error}. Please try again later.</Text>
                </View>
            </>
        );

    return (
        <View>
            <FloatingHeader text="CONSULTARE NOTE"/>
            <SemestreDropDown onSelectSemester={setSelectedSemester}/>
            <TabelNote userGrades={filteredGrades}/>
        </View>
    )
}