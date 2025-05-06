import {View} from "react-native";
import FloatingHeader from "../../components/common/FloatingHeader";
import LegendaSaliContainer from "../../components/buildings/LegendaSaliContainer";
import {RoomsMathematica} from "../../utils/Rooms";

export default function MathematicaScreen() {
    return (
        <View>
            <FloatingHeader text="Clădirea Mathematica"/>
            <LegendaSaliContainer rooms={RoomsMathematica}/>
        </View>
    )
}