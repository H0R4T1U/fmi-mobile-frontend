import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
   mainView: {
        backgroundColor: '#FFF',
        borderStyle: "solid",
        borderColor: "#AEB9C4D7",
        borderWidth: 0.5,
        marginTop: height * 0.015,
        borderRadius: 10,
        boxShadow: '0px 4px 0.8px #02407315',
        width: width * 0.90,
    },
    button: {
        backgroundColor: '#024073',
        height: height * 0.06,
        width: width * 0.90,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#024073",
        borderWidth: 0.5,
    },
    dayText: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: height * 0.020,
        letterSpacing: 2,
        fontFamily: 'Montserrat',
    },
    timeTableMainView: {
       alignItems: "center"
    },
    timeTableScrollView: {
        backgroundColor: "#fff",
        width: width * 0.899,
        boxShadow: '0px 4px 0.8px #02407315',
        overflow: "hidden",
        marginTop: height*0.005,
        borderRadius: 5,
    },
    timeTableText: {
        fontSize: height * 0.017,
        fontFamily: 'Montserrat',
        color: '#024073',
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom:height*0.01
    },
    nestedScrollView: {
       height:(height*0.05)+(height*0.045)*5
    },
    materieMainView: {
        width: width * 0.899,
        minHeight: height * 0.05,
        backgroundColor: "rgba(174,185,196,0.49)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderColor: "#024073",
        borderWidth: 0.5,
        paddingHorizontal: width * 0.03,
    },
    materieText:{
        fontSize: height * 0.017,
        fontFamily: 'Montserrat',
        color: '#024073',
        fontWeight: "bold",
        textAlign: "center",
    },
    materieRowStyle: {
        width: width * 0.899,
        minHeight: height * 0.045,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: width * 0.02,
        borderRadius: 5,
        borderColor: "#024073",
        borderBottomWidth: 0.5,
        borderTopWidth: 0,
        flexDirection: "row",
        gap: width * 0.03,
        paddingHorizontal: width * 0.03,
    },
    materieTextStyle: {
        fontSize: height * 0.017,
        fontFamily: 'Montserrat',
        color: '#024073',
        fontWeight: "bold",
        textAlign: "center",
    },
    materieValueStyle: {
        fontSize: height * 0.017,
        fontFamily: 'Montserrat',
        color: '#024073',
        fontWeight: "500",
        textAlign: "center",
    }

});