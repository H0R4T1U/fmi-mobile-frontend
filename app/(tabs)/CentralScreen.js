import {View} from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import LegendaSaliContainer from "../components/LegendaSaliContainer";
import {RoomsCentral} from "../utils/Rooms";

export default function CentralScreen() {
    return (
        <View>
            <FloatingHeader text="Clădirea Centrală"/>
            <LegendaSaliContainer rooms={RoomsCentral}/>
        </View>
    )
}