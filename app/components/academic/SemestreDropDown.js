import {useState} from "react";
import {View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from '../../utils/styles/dropdowns.styles';


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
            <View style={styles.dropDownViewStyle}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={handleChange}
                    setItems={setItems}
                    placeholder="SEMESTRUL 1"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    textStyle={styles.dropDownTextStyle}
                    style={styles.dropDownStyle}
                    selectedItemContainerStyle={styles.dropDownSelectedItemContainerStyle}
                />
            </View>)

}