import {Dimensions, Platform, StyleSheet} from "react-native";

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
   headerMainView: {
       backgroundColor: '#024073',
       height: Platform.OS === 'ios' ? height * 0.13 : height * 0.12,
       alignItems: 'center',
       justifyContent: 'center',
       paddingTop: height * 0.05
   },
   headerTopText: {
       fontFamily: 'Peddana',
       fontSize: height * 0.03,
       color: '#F5F5F6',
       textAlignVertical: 'center'
   },
   headerBottomText: {
       fontFamily: 'Peddana',
       fontSize: height * 0.025,
       color: '#A0C9FF',
       marginTop: -height * 0.021,
       textAlignVertical: 'center'
   },
    copyrightText: {
        fontFamily: 'Peddana',
        fontSize: height * 0.017,
    },
    sloganText: {
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontWeight: '100',
        fontSize: height * 0.016,
        marginTop: -height * 0.035,
        opacity: 0.4,
        letterSpacing: 1
    },
    leftText: {
        fontFamily: 'Peddana',
        color: '#024073',
        fontSize: height * 0.07
    },
    rightText: {
        fontFamily: 'Peddana',
        color: '#5A81A3',
        fontSize: height * 0.07
    },
    textView: {
        display: 'flex',
        flexDirection: 'row',
    },
    titleView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: width * 0.05
    },
    image: {
        height: height * 0.12,
        width: width * 0.22,
        resizeMode: 'contain'
    },
    imageAndTitleView: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    imageAllTextView: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 4,
    },
    mainView: {
        justifyContent: 'flex-end',
        flex: 1,
        paddingBottom: height * 0.03
    }
});