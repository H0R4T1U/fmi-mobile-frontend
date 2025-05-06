import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, ScrollView, View, ActivityIndicator } from "react-native";
import FloatingHeader from "../components/common/FloatingHeader";
import OrarContainer from "../components/home/OrarContainer";
import { CacheManager } from "../utils/CacheManager";
import Constants from "expo-constants";

const { height, width } = Dimensions.get('window');
const { BACKEND } = Constants.expoConfig.extra;

export default function HomeScreen() {
    const zile = ["Luni", "Marti", "Miercuri", "Joi", "Vineri"];
    const [group, setGroup] = useState(null);
    const [token, setToken] = useState(null);
    const [timeTable, setTimeTable] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getToken = async () => {
            try {
                const storedToken = await CacheManager.get("token");
                setToken(storedToken);
            } catch (error) {
                console.error("Token retrieval failed:", error);
            }
        };
        getToken();
    }, []);

    useEffect(() => {
        const getStudentGroup = async () => {
            try {
                if (!token) return;

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
                console.error("Fetch failed:", error);
            }
        };
        getStudentGroup();
    }, [token]);

    useEffect(() => {
        const getTimeTable = async () => {
            if (!group) return;

            try {
                setLoading(true);
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
                console.error("Fetch failed:", error);
            } finally {
                setLoading(false);
            }
        };

        getTimeTable();
    }, [group]);



    return (
        <View style={{ backgroundColor: '#fff', alignItems: "center" }}>
            <FloatingHeader text="ORAR" />

            {loading ? (
                <ActivityIndicator size="small" style={{ flex: 1 }} />
            ) : (
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingBottom: height * 0.1
                    }}
                >
                    {zile.map((zi, index) => (
                        <View key={index} style={{ marginBottom: 20 }}>
                            <OrarContainer
                                orar={timeTable?.filter((cls) => cls.classDay === zi) || []}
                                zi={zi}
                            />
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}
