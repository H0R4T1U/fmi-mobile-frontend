import {useState} from "react";
import {Dimensions, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
const {height, width} = Dimensions.get('window');


export default function MateriiDropDown({onSelectMaterie})
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "MPP", value: "1" },
        { label: "SGBD", value: "2" },
        { label: "ISS", value: "3" },
        { label: "AI", value: "4" },


    ]);

    const handleChange = (callback) => {
        setValue(callback);
        if (onSelectMaterie) {
            onSelectMaterie(callback);
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
                placeholder="Selecteaza materie"
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