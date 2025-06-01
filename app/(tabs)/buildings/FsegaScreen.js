import FloatingHeader from "../../components/common/FloatingHeader";
import CantinaContainer from "../../components/buildings/CantinaContainer";
import image from "../../../assets/images/cantina2.jpg";
import {View} from "react-native";
import LegendaSaliContainer from "../../components/buildings/LegendaSaliContainer";
import {RoomsFsega} from "../../utils/Rooms";
import {Days} from "../../utils/Days";

export default function FsegaScreen() {
    const currentDate = new Date();
    let link = 'https://www.ubbcluj.ro/ro/studenti/cantine/cafeteria_economica';
    link = link.concat(Days[currentDate.getDay() - 1]);

    return (
        <View>
            <FloatingHeader text="FSEGA"/>
            <CantinaContainer image={image} name={"Cafeteria ECONOMICA"} location={"FSEGA etajul -1"} program={"luni-vineri - 07.30-15.00"} link={link}/>
            <LegendaSaliContainer rooms={RoomsFsega}/>
        </View>
    )
}