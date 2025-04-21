import {View} from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import LegendaSaliContainer from "../components/LegendaSaliContainer";
import {RoomsNtt} from "../utils/Rooms";

export default function NttScreen() {
    return (
        <View>
            <FloatingHeader text="NTT Data"/>
            <LegendaSaliContainer rooms={RoomsNtt}/>
        </View>
    )
}