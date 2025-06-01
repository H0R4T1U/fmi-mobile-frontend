import {useEffect, useState} from "react";
import {View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from '../../utils/styles/dropdowns.styles';

export default function MateriiDropDown({items,onSelectMaterie,selectedValue})
{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);


    useEffect(() => {
        setValue(selectedValue);
    }, [selectedValue]);

    const handleValueChange = (newValue) => {

        if (onSelectMaterie && newValue) {
            onSelectMaterie(newValue);
        }
    };

    return (
        <View style={styles.dropDownViewStyle}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                onChangeValue={handleValueChange}
                placeholder="Selecteaza materie"
                dropDownContainerStyle={styles.dropDownContainerStyle}
                textStyle={styles.dropDownTextStyle}
                style={styles.dropDownStyle}
                selectedItemContainerStyle={styles.dropDownSelectedItemContainerStyle}
            />
        </View>)

}