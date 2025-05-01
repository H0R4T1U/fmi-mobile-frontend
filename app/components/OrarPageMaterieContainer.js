import {Dimensions, Text, View} from "react-native";
const {height, width} = Dimensions.get('window');


export default function OrarPageMateriaContainer({disciplina,orastart,orafinal,frecventa,sala,formatia,tipul,prof}){
    const handleTextLayout = (index, event) => {
        const height = event.nativeEvent.layout.height;
        setRowHeights((prevHeights) => ({
            ...prevHeights,
            [index]: Math.max(prevHeights[index] || 0, height),
        }));
    };
return(
                <View>
                    <View style={{
                        width:width*0.899,
                        minHeight:height*0.05,
                        backgroundColor:"rgba(174,185,196,0.49)",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:5,
                        borderColor: "#024073",
                        borderWidth: 0.5,
                        paddingHorizontal:width*0.03

                    }}

                    >
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
                    <View style={{
                        width:width*0.899,
                        minHeight:height*0.045,
                        backgroundColor:"#fff",
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:width*0.02,
                        borderRadius:5,
                        borderColor: "#024073",
                        borderBottomWidth: 0.5,
                        borderTopWidth:0,
                        flexDirection:"row",
                        gap: width * 0.03,
                        paddingHorizontal:width*0.03
                    }}>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "bold",
                            textAlign:"center"

                        }}>
                            Frecventa
                        </Text>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "500",
                            textAlign: "center",
                        }}>
                            {frecventa === 0 ? 'Saptamanal' : (frecventa === 2 ? 'Saptamana para' : 'Saptamana impara')}
                        </Text>
                    </View>
                    <View style={{
                        width:width*0.899,
                        minHeight:height*0.045,
                        backgroundColor:"#fff",
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:width*0.02,
                        borderRadius:5,
                        borderColor: "#024073",
                        borderBottomWidth: 0.5,
                        borderTopWidth:0,
                        flexDirection:"row",
                        gap: width * 0.03,
                        paddingHorizontal:width*0.03
                    }}>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "bold",
                            textAlign: "center",

                        }}>
                            Sala
                        </Text>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "500",
                            textAlign: "center",
                        }}>
                            {sala}
                        </Text>
                    </View>
                    <View style={{
                        width:width*0.899,
                        minHeight:height*0.045,
                        backgroundColor:"#fff",
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:width*0.02,
                        borderRadius:5,
                        borderColor: "#024073",
                        borderBottomWidth: 0.5,
                        borderTopWidth:0,
                        flexDirection:"row",
                        gap: width * 0.03,
                        paddingHorizontal:width*0.03
                    }}>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "bold",
                            textAlign: "center",

                        }}>
                            Formatia
                        </Text>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "500",
                            textAlign: "center",
                        }}>
                            {formatia}
                        </Text>
                    </View>
                    <View style={{
                        width:width*0.899,
                        minHeight:height*0.045,
                        backgroundColor:"#fff",
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:width*0.02,
                        borderRadius:5,
                        borderColor: "#024073",
                        borderBottomWidth: 0.5,
                        borderTopWidth:0,
                        flexDirection:"row",
                        gap: width * 0.03,
                        paddingHorizontal:width*0.03
                    }}>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "bold",
                            textAlign: "center",

                        }}>
                            Tipul
                        </Text>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "500",
                            textAlign: "center",
                        }}>
                            {tipul}
                        </Text>
                    </View>
                    <View style={{
                        width:width*0.899,
                        minHeight:height*0.045,
                        backgroundColor:"#fff",
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:width*0.02,
                        borderRadius:5,
                        borderColor: "#024073",
                        borderBottomWidth: 0.5,
                        borderTopWidth:0,
                        flexDirection:"row",
                        gap: width * 0.03,
                        paddingHorizontal:width*0.03
                    }}>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "bold",
                            textAlign: "center",

                        }}>
                            Cadrul didactic
                        </Text>
                        <Text style={{
                            fontSize: height * 0.017,
                            fontFamily: 'Montserrat',
                            color: '#024073',
                            fontWeight: "500",
                            textAlign: "center",
                        }}>
                            {prof}
                        </Text>
                    </View>
    </View>
)}