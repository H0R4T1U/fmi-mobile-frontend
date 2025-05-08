import {View} from "react-native";
import FloatingHeader from "../../components/common/FloatingHeader";
import LegendaSaliContainer from "../../components/buildings/LegendaSaliContainer";
import {RoomsDppd} from "../../utils/Rooms";

export default function DppdScreen() {
    return (
        <View>
            <FloatingHeader text="Clădirea DPPD"/>
            <LegendaSaliContainer rooms={RoomsDppd}/>
        </View>
    )
}