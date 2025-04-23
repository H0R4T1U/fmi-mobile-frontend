import {View} from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import LegendaSaliContainer from "../components/LegendaSaliContainer";
import {RoomsObs} from "../utils/Rooms";

export default function ObservatorScreen() {
    return (
        <View>
            <FloatingHeader text="Observator"/>
            <LegendaSaliContainer rooms={RoomsObs}/>
        </View>
    )
}