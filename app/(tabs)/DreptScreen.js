import {View} from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import LegendaSaliContainer from "../components/LegendaSaliContainer";
import {RoomsDrept} from "../utils/Rooms";

export default function DreptScreen() {
    return (
        <View>
            <FloatingHeader text="Clădirea Avram Iancu"/>
            <LegendaSaliContainer rooms={RoomsDrept}/>
        </View>
    )
}