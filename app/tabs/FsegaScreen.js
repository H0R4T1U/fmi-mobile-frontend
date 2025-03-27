import FloatingHeader from "../components/FloatingHeader";
import CantinaFsegaContainer from "../components/CantinaContainer";
import image from "../../assets/images/cantina.jpg";
import {View} from "react-native";

export default function FsegaScreen() {
    return (
        <View>
            <FloatingHeader text="FSEGA"/>
            <CantinaContainer image={image} name={"Cafeteria ECONOMICA"} location={"FSEGA etajul -1"} program={"luni-vineri - 07.30-15.00"}/>
        </View>
    )
}