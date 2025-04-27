import {View} from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import LegendaSaliContainer from "../components/LegendaSaliContainer";
import {RoomsLitere} from "../utils/Rooms";

export default function LitereScreen() {
    return (
        <View>
            <FloatingHeader text="Facultatea de Litere"/>
            <LegendaSaliContainer rooms={RoomsLitere}/>
        </View>
    )
}