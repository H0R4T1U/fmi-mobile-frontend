import {View} from "react-native";
import FloatingHeader from "../../components/common/FloatingHeader";
import LegendaSaliContainer from "../../components/buildings/LegendaSaliContainer";
import {RoomsDrept} from "../../utils/Rooms";
import CantinaContainer from "../../components/buildings/CantinaContainer";
import image from "../../../assets/images/cantina2.jpg";
import {Days} from "../../utils/Days";

export default function DreptScreen() {
    const currentDate = new Date();
    let link = 'https://www.ubbcluj.ro/ro/studenti/cantine/cafeteria_drept';
    link = link.concat(Days[currentDate.getDay() - 1]);
    return (
        <View>
            <FloatingHeader text="Clădirea Avram Iancu"/>
            <CantinaContainer image={image} name="Cafeteria DREPT" location="Facultatea de Drept, parter" program="luni-vineri - 07:30 - 15:00" link={link}/>
            <LegendaSaliContainer rooms={RoomsDrept}/>
        </View>
    )
}