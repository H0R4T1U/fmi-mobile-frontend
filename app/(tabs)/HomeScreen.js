import React, {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import FloatingHeader from "../components/common/FloatingHeader";
import OrarContainer from "../components/home/OrarContainer";
import Constants from "expo-constants";
import useToken from "../utils/hooks/useToken";
import ErrorView from "../components/common/ErrorView";
import LoadingView from "../components/common/LoadingView";
import useFetch from "../utils/hooks/useFetch";
import style from '../utils/styles/tabs.styles';
import {useTranslation} from "react-i18next";

const { BACKEND } = Constants.expoConfig.extra;

export default function HomeScreen() {
    const {t} = useTranslation();
    const zile = ["Luni", "Marti", "Miercuri", "Joi", "Vineri"];
    const [group, setGroup] = useState("");
    const {token, tokenLoading, tokenError} = useToken();
    const {data, dataError, dataLoading} = useFetch({
        token,
        address: `${BACKEND}/api/students`,
        hasToken: true
    });

    useEffect(()=> {
        if (!data) return;
        setGroup(data[0]?.group || "");
    },[data]);

    const {data: timeTable, dataError: timeTableError, dataLoading: timeTableLoading} = useFetch({
        address: `https://www.cs.ubbcluj.ro/apps/orar/api/classes/group/${group}/ro-RO`,
        hasToken: false
    });

    const loading = tokenLoading || timeTableLoading || dataLoading;
    const error = tokenError || timeTableError || dataError;

    if (loading)
        return <LoadingView headerText={t("timetable")}/>;

    if (error)
        return <ErrorView error={error} headerText={t("timetable")}/>;

    return (
        <View style={style.mainView}>
            <FloatingHeader text={t("timetable")}/>
            <ScrollView contentContainerStyle={style.contentContainerView}>
                {zile.map((zi, index) => (
                    <View key={index} style={style.orarContainerView}>
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
