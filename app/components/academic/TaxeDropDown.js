import React, {useEffect, useState} from "react";
import {Dimensions, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import TabelTaxeNeplatite from "./TabelTaxeNeplatite";
import TabelTaxePlatite from "./TabelTaxePlatite";
import Constants from "expo-constants";
import FloatingHeader from "../common/FloatingHeader";
import ErrorView from "../common/ErrorView";
import LoadingView from "../common/LoadingView";
import useToken from "../../utils/hooks/useToken";
import useEmail from "../../utils/hooks/useEmail";
import useFetch from "../../utils/hooks/useFetch";

const { BACKEND } = Constants.expoConfig.extra;
const {height, width} = Dimensions.get('window');


export default function TaxeDropDown()
{
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
        return <LoadingView headerText="TAXE"/>

    if (error)
        return <ErrorView error={error} headerText="TAXE"/>

    return (
        <>
            <FloatingHeader text="TAXE"/>
            <View style={{paddingHorizontal:width*0.025,paddingTop:height*0.01,borderColor:"#002E54"}}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}

                    dropDownContainerStyle={
                        {
                            borderColor:"#AEB9C4",
                            backgroundColor:"rgb(206,213,220)",
                        }
                    }
                    textStyle={{
                        fontSize: height*0.017,
                        fontFamily: 'Montserrat',
                        fontWeight: "600",
                        color: '#002E54',
                        paddingVertical:height*0.005
                    }}
                    style={{backgroundColor:"rgba(174,185,196,0.6)",
                        borderColor:"#AEB9C4",
                        borderRadius:10,
                        boxShadow: `0px ${height*0.005} ${height*0.02} #02407320`,
                        minHeight:height*0.01
                    }}

                    selectedItemContainerStyle={{ backgroundColor:"#AEB9C4"}}
                />
                {value === "TabelTaxeN"&&<TabelTaxeN/>}
                {value === "TabelTaxeP"&&<TabelTaxeP/>}
            </View>
        </>)

}