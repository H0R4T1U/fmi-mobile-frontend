import FloatingHeader from "../components/FloatingHeader";
import CantinaContainer from "../components/CantinaContainer";
import image from "../../assets/images/cantina2.jpg";
import {View} from "react-native";
import LegendaSaliContainer from "../components/LegendaSaliContainer";
import {RoomsFsega} from "../utils/Rooms";

export default function FsegaScreen() {
    return (
        <View>
            <FloatingHeader text="FSEGA"/>
            <CantinaContainer image={image} name={"Cafeteria ECONOMICA"} location={"FSEGA etajul -1"} program={"luni-vineri - 07.30-15.00"}/>
            <LegendaSaliContainer rooms={RoomsFsega}/>
        </View>
    )
}