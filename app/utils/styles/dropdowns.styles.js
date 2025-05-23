import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
   nameText: {
       fontSize: height*0.018,
       fontFamily: 'Montserrat',
       fontWeight: "500",
       color: '#fff',
       textAlign: 'center',
       textAlignVertical: 'center'
   },
    nameView: {
        backgroundColor: "rgba(2, 64, 115, 1)",
        height: '23%',
        width: width*0.35,
        borderRadius: 5,
        marginLeft:width*0.024,
        justifyContent: 'center',
    },
    image: {
        height: height*0.128,
        width: width*0.86,
        borderRadius:10,
        overflow: "hidden",
        borderWidth: width*0.0025,
        borderColor: '#024073',
        justifyContent: 'flex-end',
        paddingBottom: '1.5%',
        boxShadow: `0px ${height*0.0051} ${height*0.001} #02407315`
    },
    mainView: {
        alignItems: "center",
        paddingTop: height*0.014,
    },
    dropDownTextStyle: {
        fontSize: height*0.017,
        fontFamily: 'Montserrat',
        fontWeight: "600",
        color: '#002E54',
        paddingVertical:height*0.005
    },
    dropDownContainerStyle: {
        borderColor:"#AEB9C4",
        backgroundColor:"rgb(206,213,220)",
    },
    dropDownStyle: {
        backgroundColor:"rgba(174,185,196,0.6)",
        borderColor:"#AEB9C4",
        borderRadius:10,
        boxShadow: `0px ${height*0.01} ${height*0.02} #02407315`,
        minHeight:height*0.01
    },
    dropDownSelectedItemContainerStyle: {
        backgroundColor:"#AEB9C4"
    },
    dropDownViewStyle: {
        paddingHorizontal:width*0.025,
        paddingTop:height*0.01,
        borderColor:"#002E54"
    },


});