import {Dimensions, StyleSheet} from "react-native";

const {height, width } = Dimensions.get('window');

export default StyleSheet.create({
   mainView: {
       backgroundColor: '#fff',
       flex: 1
   },
    contentContainerView: {
        alignItems: 'center',
        paddingBottom: height * 0.1
    },
    orarContainerView: {
       marginBottom: 20
    },
    profileLogoutButtonView: {
        marginTop: height * 0.03,
        backgroundColor: '#024073',
        width: width * 0.5,
        height: height * 0.06,
        borderRadius: 10,
        justifyContent: 'center'
    },
    profileLogoutButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight:"600"
    },
    profileLanguageSwitcher: {
        alignItems: 'flex-start'
    },
    profileMainView: {
        alignItems: "center",
        flex: 1
    },
    newsContentContainerView: {
        paddingBottom: height * 0.08,
        flexGrow: 1,
    }
});