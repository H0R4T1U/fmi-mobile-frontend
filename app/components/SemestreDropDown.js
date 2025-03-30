import {useState} from "react";
import {View} from "react-native";
import FloatingHeader from "./FloatingHeader";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
import DropDownPicker from "react-native-dropdown-picker";

export default function SemestreDropDown()
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "SEMESTRUL 1", value: "option1" },
        { label: "SEMESTRUL 2", value: "option2" },
        { label: "SEMESTRUL 3", value: "option3" },
        { label: "SEMESTRUL 4", value: "option4" },
        { label: "SEMESTRUL 5", value: "option5" },
        { label: "SEMESTRUL 6", value: "option6" },
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
                    placeholder="Seleteaza semestru"
                    dropDownContainerStyle={
                        {
                            borderColor:"#AEB9C4",
                            backgroundColor:"rgba(174,185,196,0.6)",
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
            </View>)

}