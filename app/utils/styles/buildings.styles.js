import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    buildingAddressText: {
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: 5,
        paddingHorizontal:width*0.01,
        fontSize:height*0.012,
        fontFamily: 'Montserrat',
        fontWeight:"500",
        color: '#024073',
        paddingVertical: height*0.003
    },
    buildingAddressView: {
        marginTop: height*0.007,
        marginLeft: width*0.023,
        justifyContent: "center",
        alignItems:"flex-start"

    },
    buildingNameText: {
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: 5,
        paddingVertical: height*0.0025,
        paddingHorizontal:width*0.01,
        fontSize:height*0.016,
        fontFamily: 'Montserrat',
        fontWeight: "600",
        color: '#024073',
        paddingLeft:width*0.01,
    },
    buildingNameView: {
        marginTop: height*0.07,
        marginLeft: width*0.023,
        justifyContent: "center",
        alignItems:"flex-start"
    },
    buildingTextView: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(202,201,201,0.3)',
    },
    buildingImage: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        overflow: "hidden",
    },
    buildingImageAndTextView: {
        height: height*0.134,
        marginHorizontal: width*0.02,
        width:width*0.86,
        borderRadius: 10,
        boxShadow: '0px 4px 0.8px #02407315'
    },
    buildingMainView: {
        alignItems: "center",
        paddingTop: height*0.015
    },
    cantinaProgramRight: {
        backgroundColor: "rgba(174,185,196,0.65)",
        borderRadius: 5,
        fontSize:height*0.013,
        fontFamily: 'Montserrat',
        color: '#024073',
        paddingVertical:  height*0.004,
        paddingHorizontal:width*0.01,
        marginLeft: width*0.012,
        fontWeight:"500"
    },
    cantinaProgramLeft: {
        backgroundColor: "#024073",
        borderRadius: 5,
        fontSize: height*0.013,
        fontFamily: 'Montserrat',
        color: '#FFF',
        paddingVertical:  height*0.004,
        paddingHorizontal: width*0.01,
        fontWeight:"500",
    },
    cantinaProgramView: {
        marginTop: height*0.005,
        marginLeft: width*0.026,
        flexDirection: "row",
        alignItems: "center",
        marginBottom:height*0.01
    },
    cantinaLocationRight: {
        backgroundColor: "rgba(187,198,209,0.65)",
        borderRadius: 5,
        fontSize: height*0.013,
        fontFamily: 'Montserrat',
        color: '#024073',
        paddingVertical: height*0.004,
        paddingHorizontal: width*0.01,
        marginLeft: width*0.012,
        fontWeight:"500"
    },
    cantinaLocationLeft: {
        backgroundColor: "#024073",
        borderRadius: 5,
        fontSize: height*0.013,
        fontFamily: 'Montserrat',
        color: '#FFF',
        paddingVertical: height*0.004,
        paddingHorizontal: width*0.01,
        fontWeight:"500"
    },
    cantinaLocationView: {
        marginTop: height*0.022,
        marginLeft: width*0.026,
        flexDirection: "row",
        alignItems: "center",
    },
    cantinaTitleText: {
        backgroundColor: "rgba(187,198,209,0.65)",
        borderRadius: 5,
        paddingVertical: height*0.003,
        paddingHorizontal: width*0.01,
        fontSize: height*0.017,
        fontFamily: 'Montserrat',
        fontWeight: "600",
        color: '#024073',
    },
    cantinaTitleView: {
        marginTop: height*0.009,
        marginLeft: width*0.026,
        justifyContent: "center",
        alignItems:"flex-start"
    },
    cantinaMainView: {
        alignItems: "center",
        paddingTop:height*0.01
    },
    cantinaImage: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        overflow: "hidden",
    },
    cantinaBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.35)',
    },
    cantinaImageAndText: {
        height: height*0.125,
        marginHorizontal: width*0.01,
        width: width*0.86,
        borderRadius: 10,
        boxShadow: '0px 4px 0.8px #02407315'
    },
    localizareValue: {
        fontSize: height*0.016,
        fontFamily: 'Montserrat',
        color: '#024073',
        fontWeight: "500",
        height: height*0.04,
        textAlign: "center",
        textAlignVertical: "center",
        lineHeight: height*0.04,
        minWidth: '100%',
        paddingHorizontal:width*0.02
    },
    scrollView: {
        marginLeft: width*0.02,
        backgroundColor: "#fff",
        borderRadius:5,
        height: height*0.04,
        width:  width*0.53,
    },
    salaValue: {
        backgroundColor: "#fff",
        borderRadius: 5,
        fontSize: height*0.016,
        fontFamily: 'Montserrat',
        color: '#024073',
        height:height*0.04,
        width: width*0.256,
        fontWeight: "500",
        textAlign: 'center',
        textAlignVertical: "center",
        lineHeight: height*0.04,
    },
    saliView: {
        marginTop: height*0.011,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center"
    },
    mainScrollView: {
        paddingHorizontal:width*0.023
    },
    localizareText: {
        backgroundColor: "#024073",
        borderRadius: 5,
        fontSize:height*0.0145,
        fontFamily: 'Montserrat',
        color: '#FFF',
        width: width*0.53,
        paddingVertical: height*0.005,
        marginLeft:width*0.02,
        fontWeight: "500",
        textAlign: 'center'
    },
    salaText: {
        backgroundColor: "#024073",
        borderRadius: 5,
        fontSize: height*0.0145,
        fontFamily: 'Montserrat',
        width: width*0.256,
        color: '#FFF',
        paddingVertical: height*0.005,
        paddingHorizontal: width*0.083,
        fontWeight: "500",
        textAlign: 'center'
    },
    headerView: {
        marginTop:height*0.022,
        marginBottom: height*0.005,
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center"
    },
    titleText: {
        backgroundColor: "#AEB9C4",
        borderRadius: 5,
        paddingVertical: height*0.006,
        paddingHorizontal: width*0.03,
        fontSize: height*0.0155,
        fontFamily: 'Montserrat',
        fontWeight: "600",
        color: '#024073',
        textAlign: 'center'
    },
    titleView: {
        marginTop:height*0.015,
        justifyContent: "center",
        alignItems: "center",
    },
    contentView: {
        backgroundColor: "rgba(174,185,196,0.49)",
        borderStyle: "solid",
        borderColor: "#AEB9C4",
        borderWidth: 0.5,
        maxHeight:height*0.52,
        width:width*0.86,
        borderRadius: 10,
        boxShadow: '0px 4px 0.8px #02407315',
        paddingBottom:height*0.01
    },
    mainView: {
        alignItems: "center",
        paddingTop: height*0.014
    }
})