import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
   mainView: {
       paddingHorizontal:width*0.025,
       paddingTop:height*0.01,
       borderColor:"#002E54"
   },
    dropDownContainerStyle: {
        borderColor:"#AEB9C4",
        backgroundColor:"rgb(206,213,220)",
    },
    textStyle: {
        fontSize: height*0.017,
        fontFamily: 'Montserrat',
        fontWeight: "600",
        color: '#002E54',
        paddingVertical:height*0.005
    },
    dropDownStyle: {
        backgroundColor:"rgba(174,185,196,0.6)",
        borderColor:"#AEB9C4",
        borderRadius:10,
        boxShadow: `0px ${height*0.005} ${height*0.02} #02407320`,
        minHeight:height*0.01
    },
    selectedItemContainerStyle: {
        backgroundColor:"#AEB9C4"
   }
});