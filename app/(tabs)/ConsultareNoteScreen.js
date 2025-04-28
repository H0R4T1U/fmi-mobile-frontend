import FloatingHeader from "../components/FloatingHeader";
import {View} from "react-native";
import SemestreDropDown from "../components/SemestreDropDown";
import TabelExamene from "../components/TabelExamene";
import {Examene} from "../utils/Examene";
import TabelNote from "../components/TabelNote";
import Constants from "expo-constants";
import {useRouter} from "expo-router";
import {useCallback, useEffect, useState} from "react";
import {CacheManager} from "../utils/CacheManager";

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

    return (
        <View>
            <FloatingHeader text="CONSULTARE NOTE"/>
            <SemestreDropDown onSelectSemester={setSelectedSemester}/>
            <TabelNote userGrades={filteredGrades}/>
        </View>
    )
}