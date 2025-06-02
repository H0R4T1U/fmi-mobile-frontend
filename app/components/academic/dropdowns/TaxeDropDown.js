import React, {useEffect, useState} from "react";
import {View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import TabelTaxeNeplatite from "../tables/TabelTaxeNeplatite";
import TabelTaxePlatite from "../tables/TabelTaxePlatite";
import Constants from "expo-constants";
import FloatingHeader from "../../common/FloatingHeader";
import ErrorView from "../../common/ErrorView";
import LoadingView from "../../common/LoadingView";
import useToken from "../../../utils/hooks/useToken";
import useFetch from "../../../utils/hooks/useFetch";
import {useTranslation} from "react-i18next";
import styles from '../../../utils/styles/academic/taxe_dropdown.styles';

const { BACKEND } = Constants.expoConfig.extra;


export default function TaxeDropDown()
{
    const {t} = useTranslation();
    const {token, tokenError, tokenLoading} = useToken();
    const[taxePlatite,setTaxePlatite]=useState([]);
    const[taxeNeplatite,setTaxeNeplatite]=useState([]);
    const [taxeP, setTaxeP] = useState([]);
    const [taxeN, setTaxeN] = useState([]);
    const [taxePlatiteError, setTaxePlatiteError] = useState(null);
    const [taxeNeplatiteError, setTaxeNeplatiteError] = useState(null);
    const refetchTaxe = async () => {
        try {
            const [resPlatite, resNeplatite] = await Promise.all([
                    fetch(`${BACKEND}/api/paid-tuitions`, {
                        headers: { 'Authorization': `Bearer ${token}`,'Content-Type': 'application/json' }
                    }),
                    fetch(`${BACKEND}/api/tuitions`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    }),
                ]);

            const dataP = await resPlatite.json();
            const dataN = await resNeplatite.json();

            setTaxeP(dataP ?? []);
            setTaxeN(dataN ?? []);
            setTaxePlatiteError(null);
            setTaxeNeplatiteError(null);
        } catch (e) {
            setTaxePlatiteError("Eroare la taxe platite");
            setTaxeNeplatiteError("Eroare la taxe neplatite");
        }
    };

    useEffect(() => {
        if (token) refetchTaxe();
    }, [token]);


    const error = taxePlatiteError || taxeNeplatiteError || tokenError;

    useEffect(() => {
        setTaxePlatite(taxeP || []);
        setTaxeNeplatite(taxeN || []);
    }, [taxeP, taxeN]);


    const TabelTaxeN = () =>(
        <TabelTaxeNeplatite examene={taxeNeplatite} setexamene={setTaxeNeplatite} refetchAll={refetchTaxe}/>
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