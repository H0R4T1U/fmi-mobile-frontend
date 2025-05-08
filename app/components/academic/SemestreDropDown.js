import {useState} from "react";
import {Dimensions, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const {height, width} = Dimensions.get('window');


export default function SemestreDropDown({onSelectSemester})
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "SEMESTRUL 1", value: "1" },
        { label: "SEMESTRUL 2", value: "2" },
        { label: "SEMESTRUL 3", value: "3" },
        { label: "SEMESTRUL 4", value: "4" },
        { label: "SEMESTRUL 5", value: "5" },
        { label: "SEMESTRUL 6", value: "6" },
        { label: "SEMESTRUL 7", value: "7" },
        { label: "SEMESTRUL 8", value: "8" },

    ]);

    const handleChange = (callback) => {
        setValue(callback);
        if (onSelectSemester) {
            onSelectSemester(callback);
        }
    };

    return (

            <View style={{paddingHorizontal:width*0.025,paddingTop:height*0.01,borderColor:"#002E54"}}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={handleChange}
                    setItems={setItems}
                    placeholder="Selecteaza semestru"
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
                        boxShadow: `0px ${height*0.01} ${height*0.02} #02407315`,
                        minHeight:height*0.01
                    }}

                    selectedItemContainerStyle={{ backgroundColor:"#AEB9C4"}}
                />
            </View>)

}