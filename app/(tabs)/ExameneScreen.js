import FloatingHeader from "../components/FloatingHeader";
import {View} from "react-native";
import SemestreDropDown from "../components/SemestreDropDown";
import TabelExamene from "../components/TabelExamene";
import {useEffect, useState} from "react";
import {CacheManager} from "../utils/CacheManager";
import Constants from "expo-constants";
const { BACKEND } = Constants.expoConfig.extra;


export default function ExameneScreen() {
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);
    const [examene, setExamene] = useState([]);
    const [error, setError] = useState(null);
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
        const fetchExamene = async () => {
            try {
                if (!token) return;

                const cachedUser = await CacheManager.get("loggedUser");
                const userMail=cachedUser.mail;
                setLoading(true);
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
                console.error("Examene fetch failed:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (token) fetchExamene();
    }, [token]);

    const filteredExams = selectedSemester
        ? examene.filter(examen => examen.semester === parseInt(selectedSemester))
        : examene;

    return (
        <View>
            <FloatingHeader text="EXAMENE"/>
            <SemestreDropDown  onSelectSemester={setSelectedSemester}/>
            <TabelExamene examene={filteredExams}/>
        </View>
    )
}