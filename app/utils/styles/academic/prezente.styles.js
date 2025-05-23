import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    mainView: {
        alignItems: "center",
        paddingTop: height * 0.015
    },
    view: {
        backgroundColor: "rgba(174,185,196,0.49)",
        borderStyle: "solid",
        borderColor: "#AEB9C4",
        borderWidth: 0.5,
        height: height * 0.6,
        width: width * 0.95,
        borderRadius: 10,
        boxShadow: `0px ${height * 0.01} ${height * 0.02} #02407315`,
        overflow: "hidden",
    },
    headerView: {
        flexDirection: "row",
        backgroundColor: "#AEB9C4",
        borderRadius: 10,
        height: height * 0.045,
        width:width*0.95,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    headerText: {
        textAlignVertical:"center",
        textAlign:"center",
        backgroundColor: "#024073",
        justifyContent:"center",
        fontFamily: 'Montserrat',
        color: '#FFF',
        fontWeight: "500",
        borderRadius: 5,
        fontSize: height*0.0135,
        paddingVertical: height*0.0065,
        marginLeft:width*0.012
    },
    scrollView: {
        paddingBottom: height * 0.15,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    itemText: {
        fontFamily: 'Montserrat',
        color: '#024073',
        fontWeight: "600",
        textAlign: "center",
        textAlignVertical: 'center',
        fontSize: height * 0.016,
        paddingHorizontal:width*0.01,
        paddingVertical:height*0.005
    },
    header: {
        marginTop: height * 0.01,
        flexDirection: "row",
        alignItems: "center",
        minHeight:height * 0.01
    },
    dataView: {
        backgroundColor: "#fff",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:width*0.012
    }
});