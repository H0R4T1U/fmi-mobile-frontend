import {useState} from "react";
import {View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from '../../utils/styles/dropdowns.styles';

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
        <View style={styles.dropDownViewStyle}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={handleChange}
                setItems={setItems}
                placeholder="Selecteaza materie"
                dropDownContainerStyle={styles.dropDownContainerStyle}
                textStyle={styles.dropDownTextStyle}
                style={styles.dropDownStyle}
                selectedItemContainerStyle={styles.dropDownSelectedItemContainerStyle}
            />
        </View>)

}