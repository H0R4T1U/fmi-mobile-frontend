import {View} from "react-native";
import FloatingHeader from "../../components/common/FloatingHeader";
import LegendaSaliContainer from "../../components/buildings/LegendaSaliContainer";
import {RoomsCreic} from "../../utils/Rooms";

export default function CreicScreen() {
    return (
        <View>
            <FloatingHeader text="CREIC"/>
            <LegendaSaliContainer rooms={RoomsCreic}/>
        </View>
    )
}