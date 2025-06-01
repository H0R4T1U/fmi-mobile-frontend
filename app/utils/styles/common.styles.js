import {Dimensions, Platform, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
   floatingHeaderView: {
       alignItems: "center",
       alignSelf: "center",
       backgroundColor: "#AEB9C4",
       borderRadius: 15,
       height: height*0.08,
       width: width*0.94,
       top: -0.022*height,
       justifyContent: "center",
       boxShadow: '0px 4px 0.8px #02407315',
       marginBottom:height*-0.01
   },
   floatingHeaderText: {
       fontFamily: 'Montserrat',
       fontSize: height*0.027,
       color: '#002E54',
       fontWeight: '600',
   },
    headerMainView: {
        height: height * 0.11,
        backgroundColor: 'transparent',
        position: 'relative',
        width: "100%",
    },
    headerBackgroundView: {
        height: height * 0.11,
        position: 'absolute',
        backgroundColor: "#AEB9C4",
        opacity: 0.49,
        width: "100%",
    },
    headerTitleView: {
        position: 'absolute',
        width: "100%",
    },
    titleMainView: {
        flexDirection: 'row',
        top: Platform.OS === "android" ? height*0.027 : height * 0.037,
        paddingHorizontal: width*0.05,
        alignItems: 'center',
        overflow: 'hidden',
    },
    titleLeftText: {
        fontSize: 36,
        fontFamily: 'Peddana',
        color: '#024073',
    },
    titleRightText: {
        fontSize: 36,
        fontFamily: 'Peddana',
        color: '#5A81A3',
    }
});