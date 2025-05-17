import React, {useEffect, useState} from "react";
import {Dimensions, ScrollView, View} from "react-native";
import FloatingHeader from "../components/common/FloatingHeader";
import OrarContainer from "../components/home/OrarContainer";
import Constants from "expo-constants";
import useToken from "../utils/hooks/useToken";
import ErrorView from "../components/common/ErrorView";
import LoadingView from "../components/common/LoadingView";
import useFetch from "../utils/hooks/useFetch";

const { height, width } = Dimensions.get('window');
const { BACKEND } = Constants.expoConfig.extra;

export default function HomeScreen() {
    const zile = ["Luni", "Marti", "Miercuri", "Joi", "Vineri"];
    const [timeTable, setTimeTable] = useState(null);
    const [timeTableLoading, setTimeTableLoading] = useState(false);
    const [timeTableError, setTimeTableError] = useState(null);
    const {token, tokenLoading, tokenError} = useToken();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address: `${BACKEND}/api/students`
    })

    const [group,setGroup]=useState("");
    const loading = tokenLoading || timeTableLoading || dataLoading;
    const error = tokenError || timeTableError || dataError;
    console.log(data);


    useEffect(()=>{
        if(!loading||!data)return;
        setGroup(data[0]?.group||"");
    },[data,loading]);
    useEffect(() => {
        const getTimeTable = async () => {
            if (!group) return;
            try {
                setTimeTableLoading(true);
                const response = await fetch(`https://www.cs.ubbcluj.ro/apps/orar/api/classes/group/${group}/ro-RO`, {
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${token}`
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
        </View>
    );
}
