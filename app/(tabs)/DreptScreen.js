import {View} from "react-native";
import FloatingHeader from "../components/FloatingHeader";
import LegendaSaliContainer from "../components/LegendaSaliContainer";
import {RoomsDrept} from "../utils/Rooms";
import CantinaContainer from "../components/CantinaContainer";
import image from "../../assets/images/cantina2.jpg";

export default function DreptScreen() {
    return (
        <View>
            <FloatingHeader text="Clădirea Avram Iancu"/>
            <CantinaContainer image={image} name="Cafeteria DREPT" location="Facultatea de Drept, parter" program="luni-vineri - 07:30 - 15:00"/>
            <LegendaSaliContainer rooms={RoomsDrept}/>
        </View>
    )
}