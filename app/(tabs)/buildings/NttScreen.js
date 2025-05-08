import {View} from "react-native";
import FloatingHeader from "../../components/common/FloatingHeader";
import LegendaSaliContainer from "../../components/buildings/LegendaSaliContainer";
import {RoomsNtt} from "../../utils/Rooms";

export default function NttScreen() {
    return (
        <View>
            <FloatingHeader text="NTT Data"/>
            <LegendaSaliContainer rooms={RoomsNtt}/>
        </View>
    )
}