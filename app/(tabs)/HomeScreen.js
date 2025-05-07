import React, { useEffect, useState } from "react";
import {Dimensions, ScrollView, View} from "react-native";
import FloatingHeader from "../components/common/FloatingHeader";
import OrarContainer from "../components/home/OrarContainer";
import { CacheManager } from "../utils/CacheManager";
import Constants from "expo-constants";
import useToken from "../utils/useToken";
import ErrorView from "../components/common/ErrorView";
import LoadingView from "../components/common/LoadingView";

const { height, width } = Dimensions.get('window');
const { BACKEND } = Constants.expoConfig.extra;

export default function HomeScreen() {
    const zile = ["Luni", "Marti", "Miercuri", "Joi", "Vineri"];
    const [group, setGroup] = useState(null);
    const [groupLoading, setGroupLoading] = useState(false);
    const [groupError, setGroupError] = useState(null);
    const [timeTable, setTimeTable] = useState(null);
    const [timeTableLoading, setTimeTableLoading] = useState(false);
    const [timeTableError, setTimeTableError] = useState(null);
    const {fetchedToken: token, tokenLoading, tokenError} = useToken();

    const loading = tokenLoading || groupLoading || timeTableLoading;
    const error = tokenError || groupError || timeTableError;


    useEffect(() => {
        const getStudentGroup = async () => {
            try {
                if (!token) return;
                setGroupLoading(true);
                const cachedUser = await CacheManager.get("loggedUser");
                const userMail = cachedUser.mail;
                const response = await fetch(`${BACKEND}/api/students/${userMail}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseData = await response.json();
                if (responseData._embedded && responseData._embedded.studentList) {
                    setGroup(responseData._embedded.studentList[0].group);
                } else {
                    setGroup(null);
                }

            } catch (error) {
                setGroupError(error);
                console.error("Fetch failed:", error);
            } finally {
                setGroupLoading(false);
            }
        };
        getStudentGroup();
    }, [token]);

    useEffect(() => {
        const getTimeTable = async () => {
            if (!group) return;
            try {
                setTimeTableLoading(true);
                const response = await fetch(`https://www.cs.ubbcluj.ro/apps/orar/api/classes/group/${group}/ro-RO`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseData = await response.json();
                setTimeTable(responseData);
            } catch (error) {
                setTimeTableError(error);
                console.error("Fetch failed:", error);
            } finally {
                setTimeTableLoading(false);
            }
        };
        getTimeTable();
    }, [group]);

    if (loading)
        return <LoadingView headerText="ORAR"/>;

    if (error)
        return <ErrorView error={error} headerText="ORAR"/>;


    return (
        <View style={{ backgroundColor: '#fff', alignItems: "center" }}>
            <FloatingHeader text="ORAR" />
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingBottom: height * 0.1
                }}>
                {zile.map((zi, index) => (
                    <View key={index} style={{ marginBottom: 20 }}>
                        <OrarContainer
                            orar={timeTable?.filter((cls) => cls.classDay === zi) || []}
                            zi={zi}
                        />
                    </View>
                ))}
            </ScrollView>
            )
        </View>
    );
}
