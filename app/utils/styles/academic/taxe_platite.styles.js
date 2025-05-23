import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    mainView: {
        alignItems: "center",
        paddingTop: height*0.01,
        paddingHorizontal: width*0.01
    },
    view: {
        backgroundColor: "rgba(174,185,196,0.49)",
        borderStyle: "solid",
        borderColor: "#AEB9C4",
        borderWidth: 0.5,
        height: height*0.6,
        width: width*0.95,
        borderRadius: 10,
        boxShadow: `0px ${height*0.01} ${height*0.02} #02407315`,
        marginTop:10,
        overflow: "hidden",
    },
    headerView: {
        flexDirection: "row",
        backgroundColor: "#AEB9C4",
        borderRadius: 10,
        height:height*0.045,
        paddingRight:width*0.022
    },
    headerItemView: {
        height: height * 0.03,
        borderRadius: 5,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: width * 0.015,
        backgroundColor: '#024073',
    },
    headerItemText: {
        fontSize: height * 0.014,
        fontFamily: "Montserrat",
        color: "#FFF",
        fontWeight: "500",
        justifyContent: "center",
        textAlignVertical: "center",
        textAlign: 'center',
    },
    scrollView: {
        paddingBottom: height * 0.02,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: height*0.014,
        fontFamily: 'Montserrat',
        color: '#024073',
        fontWeight: "500",
        textAlign: "center",
        paddingHorizontal:width*0.012,
        paddingVertical:height*0.005
    },
    textView: {
        backgroundColor: "#fff",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: width * 0.015,
    },
    taxaView: {
        marginTop: height * 0.011,
        flexDirection: "row",
        alignItems: "center",
    }
});