import {useState} from "react";
import {View} from "react-native";
import FloatingHeader from "./FloatingHeader";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
import DropDownPicker from "react-native-dropdown-picker";
import TabelTaxeNeplatite from "./TabelTaxeNeplatite";
import TabelTaxePlatite from "./TabelTaxePlatite";
import {Examene} from "../utils/Examene";

export default function TaxeDropDown()
{
    const TabelTaxeN = () =>(
        <TabelTaxeNeplatite examene={Examene}/>
    )
    const TabelTaxeP=()=>(
        <TabelTaxePlatite examene={Examene}/>
    )
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("TabelTaxeN");
    const [items, setItems] = useState([
        { label: "TAXE DE PLATIT", value: "TabelTaxeN" },
        { label: "TAXE PLATITE", value: "TabelTaxeP" },

    ]);
    return (

        <View style={{paddingHorizontal:scaleWidth(10),paddingTop:scaleHeight(10),borderColor:"#002E54"}}>
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
                    fontSize: scaleHeight(15),
                    fontFamily: 'Montserrat',
                    fontWeight: "600",
                    color: '#002E54',
                    paddingVertical:scaleHeight(5)
                }}
                style={{backgroundColor:"rgba(174,185,196,0.6)",
                    borderColor:"#AEB9C4",
                    borderRadius:10,
                    shadowColor: "#024073",
                    shadowOpacity: 0.1,
                    shadowRadius: scaleHeight(0.7),
                    shadowOffset: {height: scaleHeight(4)},
                    minHeight:scaleHeight(30)
                }}

                selectedItemContainerStyle={{ backgroundColor:"#AEB9C4"}}
            />
            {value === "TabelTaxeN"&&<TabelTaxeN/>}
            {value === "TabelTaxeP"&&<TabelTaxeP/>}
        </View>)

}