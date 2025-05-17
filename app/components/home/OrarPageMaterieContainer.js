import {Dimensions, Text, View} from "react-native";
import {orarRowStyle, orarTextTitleStyle, orarTextValueStyle} from "../../utils/styles";
const {height, width} = Dimensions.get('window');


export default function OrarPageMateriaContainer({disciplina,orastart,orafinal,frecventa,sala,formatia,tipul,prof}){

    const renderRow = (title, value) => (
        <View style={orarRowStyle(width,height)}>
            <Text style={orarTextTitleStyle(width,height)}>{title}</Text>
            <Text style={orarTextValueStyle(width,height)}>{value}</Text>
        </View>
    );

    const frecventaText = frecventa === 0 ? 'Saptamanal' : (frecventa === 2 ? 'Saptamana para' : 'Saptamana impara');


    return (
        <View>
            <View style={{
                width: width * 0.899,
                minHeight: height * 0.05,
                backgroundColor: "rgba(174,185,196,0.49)",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                borderColor: "#024073",
                borderWidth: 0.5,
                paddingHorizontal: width * 0.03,
            }}>
                <Text style={{
                    fontSize: height * 0.017,
                    fontFamily: 'Montserrat',
                    color: '#024073',
                    fontWeight: "bold",
                    textAlign: "center",
                }}>
                    {disciplina} | {orastart} - {orafinal}
                </Text>
            </View>

            {renderRow('Frecventa', frecventaText)}
            {renderRow('Sala', sala)}
            {renderRow('Formatia', formatia)}
            {renderRow('Tipul', tipul)}
            {renderRow('Cadrul didactic', prof)}
        </View>

)}