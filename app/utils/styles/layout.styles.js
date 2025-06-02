import {Dimensions, Platform, StyleSheet} from "react-native";

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#024073",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: width * 0.15,
        height: width * 0.15,
        backgroundColor: "#fff"
    },
    image: {
        marginBottom: 8,
        width: width * 0.22,
        height: height * 0.22,
        resizeMode: "contain"
    },
    text: {
        textAlign: "center",
        color: "#024073",
        fontSize: height * 0.015,
        fontFamily: "Montserrat",
        marginHorizontal: '-70%'
    },
    iconWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    homeButtonImage: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: 100,
        borderColor: "#fff",
        resizeMode: "contain"
    },
    homeButtonView: {
        backgroundColor: "#fff",
        borderRadius: width * 0.25,
        padding: width * 0.25 * 0.07,
        paddingBottom: width * 0.25 * 0.08
    },
    homeButton: {
        position: 'absolute',
        bottom: Platform.OS === 'android' ? height * 0.015 : height * 0.03
    }
});