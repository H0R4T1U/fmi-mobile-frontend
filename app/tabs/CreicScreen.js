import {View} from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import LegendaSaliContainer from "../components/LegendaSaliContainer";
import {RoomsCreic} from "../utils/Rooms";

export default function CreicScreen() {
    return (
        <View>
            <FloatingHeader text="CREIC"/>
            <LegendaSaliContainer rooms={RoomsCreic}/>
        </View>
    )
}