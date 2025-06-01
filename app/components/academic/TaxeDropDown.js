import React, {useEffect, useState} from "react";
import {View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import TabelTaxeNeplatite from "./TabelTaxeNeplatite";
import TabelTaxePlatite from "./TabelTaxePlatite";
import Constants from "expo-constants";
import FloatingHeader from "../common/FloatingHeader";
import ErrorView from "../common/ErrorView";
import LoadingView from "../common/LoadingView";
import useToken from "../../utils/hooks/useToken";
import useFetch from "../../utils/hooks/useFetch";
import {useTranslation} from "react-i18next";
import styles from '../../utils/styles/academic/taxe_dropdown.styles';

const { BACKEND } = Constants.expoConfig.extra;


export default function TaxeDropDown()
{
    const {t} = useTranslation();
    const {token, tokenError, tokenLoading} = useToken();
    const[taxePlatite,setTaxePlatite]=useState([]);
    const[taxeNeplatite,setTaxeNeplatite]=useState([]);
    let {data : taxeP, dataError: taxePlatiteError , dataLoading : taxePlatiteLoading} = useFetch(
        {token,
            address: `${BACKEND}/api/paid-tuitions`,
            hasToken: true
        });
    let {data : taxeN, dataError: taxeNeplatiteError, dataLoading: taxeNeplatiteLoading} = useFetch(
        {token,
            address: `${BACKEND}/api/tuitions`,
            hasToken: true
        });
    const loading = taxePlatiteLoading || taxeNeplatiteLoading || tokenLoading;
    const error = taxePlatiteError || taxeNeplatiteError || tokenError;

    useEffect(() => {
        setTaxePlatite(taxeP || []);
        setTaxeNeplatite(taxeN || []);
    }, [taxeP, taxeN]);


    const TabelTaxeN = () =>(
        <TabelTaxeNeplatite examene={taxeNeplatite} setexamene={setTaxeNeplatite}/>
    )
    const TabelTaxeP=()=>(
        <TabelTaxePlatite taxePlatite={taxePlatite} />
    )
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("TabelTaxeN");
    const [items, setItems] = useState([
        { label: "TAXE DE PLATIT", value: "TabelTaxeN" },
        { label: "TAXE PLATITE", value: "TabelTaxeP" },

    ]);

    if (loading)
        return <LoadingView headerText={t("fees").toString().toUpperCase()}/>

    if (error)
        return <ErrorView error={error} headerText={t("fees").toString().toUpperCase()}/>

    return (
        <>
            <FloatingHeader text={t("fees").toString().toUpperCase()}/>
            <View style={styles.mainView}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    textStyle={styles.textStyle}
                    style={styles.dropDownStyle}
                    selectedItemContainerStyle={styles.selectedItemContainerStyle}
                />
                {value === "TabelTaxeN"&&<TabelTaxeN/>}
                {value === "TabelTaxeP"&&<TabelTaxeP/>}
            </View>
        </>
    );
}