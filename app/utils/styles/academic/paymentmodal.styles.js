import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    viewPayment:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewModal:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        width: '90%',
        position: 'relative',
    },

    touchableModal:{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        marginBottom:20
    },

    viewModal2:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop:15
    },

    viewModalInside:{
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },

    modalText:{
        marginHorizontal: 10,
        color: '#999',
    },

    cardForm:{
        width: '100%',
        height: 200,
    },

    cardStyle:{
        backgroundColor: "white",
        textAlign: "center",
    },

    buttonStylePay:{
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonTextStylePay:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})