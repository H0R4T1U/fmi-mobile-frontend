import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
   mainView: {
       backgroundColor: '#AEB9C4D7',
       marginTop: height*0.015,
       display: 'flex',
       flexDirection: 'column',
       height: height*0.24,
       width: width*0.86,
       borderRadius: 10,
       alignItems: 'center',
       justifyContent: 'center',
       boxShadow: '0px 4px 0.8px #02407315'
   },
    titleView: {
        backgroundColor: '#024073',
        marginBottom: height*0.007,
        height: height*0.045,
        width: width*0.37,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: '#fff',
        fontWeight:"600",
        alignSelf:"center",
        justifyContent:"center",
        paddingHorizontal:width*0.01,
        textAlign:"center"
    },
    usernameView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height*0.02
    },
    usernameLeftView: {
        backgroundColor: '#024073',
        borderRadius: 5,
        width: width*0.27,
        height: height*0.035,
        alignItems: 'center',
        justifyContent:'center'
    },
    usernameLeftText: {
        fontSize: height*0.0147,
        fontFamily: 'Montserrat',
        fontWeight:"600",
        color: '#fff',
        textAlign: 'center'
    },
    usernameRightView: {
        backgroundColor: '#fff',
        height: height*0.052,
        width: width*0.48,
        borderRadius: 5,
        marginLeft: width*0.03,
        justifyContent: 'center',
        alignItems: 'center',
    },
    usernameRightText: {
        fontSize: height*0.016,
        fontFamily: 'Montserrat',
        color: '#024073',
        fontWeight:"500",
    },
    passwordView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.025
    },
    passwordLeftView: {
        backgroundColor: '#024073',
        borderRadius: 5,
        width: width*0.27,
        height: height*0.035,
        alignItems: 'center',
        justifyContent:'center'
    },
    passwordLeftText: {
        fontSize: height*0.0145,
        fontFamily: 'Montserrat',
        color: '#fff',
        textAlign: 'center',
        fontWeight:"600",
    },
    passwordRightView: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
    },
    passwordInput: {
        backgroundColor: '#fff',
        height: height*0.052,
        width: width*0.48,
        borderRadius: 5,
        marginLeft: width*0.03,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textInput: {
        fontSize: height*0.016,
        fontFamily: 'Montserrat',
        color: '#024073',
        textAlignVertical: 'center',
        fontWeight:"500",
        textAlign: 'center',
        flex: 1,
        includeFontPadding: false
    },
    smallContainerMainView: {
        backgroundColor: '#AEB9C4D7',
        marginTop: height*0.015,
        display: 'flex',
        flexDirection: 'row',
        height: height*0.075,
        width: width*0.86,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 0.8px #02407315'
    },
    smallContainerTextView: {
        backgroundColor: '#024073',
        borderRadius: 5,
        width:width*0.27,
        height: height*0.035,
        alignItems: 'center',
        justifyContent:'center'
    },
    smallContainerText: {
        fontSize: height*0.0147,
        fontFamily: 'Montserrat',
        fontWeight:"600",
        color: '#fff',
        textAlign: 'center',
    },
    smallContainerScrollView: {
        backgroundColor: '#fff',
        height: height*0.052,
        width: width*0.48,
        borderRadius: 5,
        marginLeft: width*0.03,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallContainerScrollText: {
        fontSize: height*0.016,
        fontFamily: 'Montserrat',
        fontWeight:"500",
        color: '#024073',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf:"center"
    }

});