import {useState} from "react";
import {Dimensions, View} from "react-native";
import FloatingHeader from "./FloatingHeader";
import {scaleHeight, scaleWidth} from "../utils/ScaleFunction";
import DropDownPicker from "react-native-dropdown-picker";
const {height, width} = Dimensions.get('window');


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
        { label: "SEMESTRUL 7", value: "option7" },
        { label: "SEMESTRUL 8", value: "option8" },

    ]);
    return (

            <View style={{paddingHorizontal:width*0.025,paddingTop:height*0.01,borderColor:"#002E54"}}>
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
                        shadowColor: "#024073",
                        shadowOpacity: 0.1,
                        shadowRadius: 0.7,
                        shadowOffset: {height: 4},
                        minHeight:height*0.01
                    }}

                    selectedItemContainerStyle={{ backgroundColor:"#AEB9C4"}}
                />
            </View>)

}