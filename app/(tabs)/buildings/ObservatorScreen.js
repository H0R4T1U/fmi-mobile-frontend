import {View} from "react-native";
import FloatingHeader from "../../components/common/FloatingHeader";
import LegendaSaliContainer from "../../components/buildings/LegendaSaliContainer";
import {RoomsObs} from "../../utils/Rooms";

export default function ObservatorScreen() {
    return (
        <View>
            <FloatingHeader text="Observator"/>
            <LegendaSaliContainer rooms={RoomsObs}/>
        </View>
    )
}