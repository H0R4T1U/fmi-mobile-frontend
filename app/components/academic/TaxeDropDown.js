import React, {useEffect, useState} from "react";
import {ActivityIndicator, Dimensions, Text, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import TabelTaxeNeplatite from "./TabelTaxeNeplatite";
import TabelTaxePlatite from "./TabelTaxePlatite";
import { CacheManager } from "../../utils/CacheManager";
import Constants from "expo-constants";
import FloatingHeader from "../common/FloatingHeader";
const { BACKEND } = Constants.expoConfig.extra;
const {height, width} = Dimensions.get('window');


export default function TaxeDropDown()
{
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);
    const [taxePlatite, setTaxePlatite] = useState([]);
    const [taxeNeplatite, setTaxeNeplatite] = useState([]);
    const [error, setError] = useState(null);

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
        const fetchTaxePlatite = async () => {
            try {
                if (!token) return;

                const cachedUser = await CacheManager.get("loggedUser");
                const userMail=cachedUser.mail;
                setLoading(true);
                const response = await fetch(`${BACKEND}/api/paid-tuitions/${userMail}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                if (responseData._embedded && responseData._embedded.paidTuitionDTOList) {
                    setTaxePlatite(responseData._embedded.paidTuitionDTOList);
                }
                else
                    setTaxePlatite([]);


            } catch (error) {
                console.error("Taxe fetch failed:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (token) fetchTaxePlatite();
    }, [token]);

    useEffect(() => {
        const fetchTaxeNeplatite = async () => {
            try {
                if (!token) return;

                const cachedUser = await CacheManager.get("loggedUser");
                const userMail=cachedUser.mail;
                setLoading(true);
                const response = await fetch(`${BACKEND}/api/tuitions/${userMail}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                if (responseData._embedded && responseData._embedded.tuitionDTOList) {
                    setTaxeNeplatite(responseData._embedded.tuitionDTOList);
                }
                else
                    setTaxeNeplatite([]);


            } catch (error) {
                console.error("TaxeNeplatite fetch failed:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (token) fetchTaxeNeplatite();
    }, [token]);

    const TabelTaxeN = () =>(
        <TabelTaxeNeplatite examene={taxeNeplatite}/>
    )
    const TabelTaxeP=()=>(
        <TabelTaxePlatite examene={taxePlatite}/>
    )
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("TabelTaxeN");
    const [items, setItems] = useState([
        { label: "TAXE DE PLATIT", value: "TabelTaxeN" },
        { label: "TAXE PLATITE", value: "TabelTaxeP" },

    ]);

    if (loading)
        return (
            <>
                <ActivityIndicator size="small" style={{
                    flex: 1
                }}/>
            </>
        );
    if (error)
        return (
            <>
                <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#024073', fontFamily: 'Montserrat', fontSize: height * 0.015, textAlign: 'center', textAlignVertical: 'center'}}>{error}. Please try again later.</Text>
                </View>
            </>
        );

    return (

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
        </View>)

}