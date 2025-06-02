import React, {useState} from 'react';
import {Alert, Modal, Text, TouchableOpacity, View} from 'react-native';
import {CardForm, useConfirmPayment} from '@stripe/stripe-react-native';
import {Ionicons} from '@expo/vector-icons';
import Constants from "expo-constants";
import useToken from "../../utils/hooks/useToken";
import styles from '../../utils/styles/academic/paymentmodal.styles';

const { BACKEND } = Constants.expoConfig.extra;

const AddCardModal = ({ visible, onClose, amount,tuitionCrt,setsuccess }) => {
    const { confirmPayment } = useConfirmPayment();
    const [cardDetails, setCardDetails] = useState(null);
    const [billingCountry, setBillingCountry] = useState('Romania');
    const [zipCode, setZipCode] = useState('');
    const {token, tokenError, tokenLoading} = useToken();

    const handlePayment = async () => {
        if (!cardDetails?.complete) {
            Alert.alert('Incomplete', 'Please complete the card details.');
            return;
        }

        const clientSecret = await fetchClientSecret();
        if(!clientSecret)
            return;

        const { paymentIntent, error } = await confirmPayment(clientSecret, {
            paymentMethodType: 'Card',
            paymentMethodData: {
                billingDetails: {
                    address: {
                        postalCode: zipCode,
                        country: billingCountry,
                    },
                },
            },
        });

        if (error) {
            Alert.alert('Payment failed', error.message);
            onClose();
        } else if (paymentIntent) {

                const resp=await fetch(`${BACKEND}/api/payment/success?paymentIntentId=${paymentIntent.id}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            Alert.alert('Success', 'Payment completed!', [
                {
                    text: "OK",
                    onPress: () => {
                        setsuccess(true);
                        onClose();
                    }
                }
            ]);
        }
    };

    const fetchClientSecret = async () => {
        const response = await fetch(`${BACKEND}/api/payment/create-checkout-session`, {
            method: "POST",
            headers: {'Authorization': `Bearer ${token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ amount: Number(amount),tuitionNumber:Number(tuitionCrt) })
        });
        const data = await response.json();

        if (!data.error)
            return data.clientSecret;
        else
            Alert.alert("Error",data.error);
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
            <View style={styles.viewPayment}>
                <View style={styles.viewModal}>
                    <TouchableOpacity style={styles.touchableModal} onPress={onClose}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.viewModal2}>
                        <View style={styles.viewModalInside}/>
                        <Text style={styles.modalText}>Pay with a card</Text>
                        <View style={styles.viewModalInside} />
                    </View>
                    <CardForm
                        onFormComplete={(cardDetails) => setCardDetails(cardDetails)}
                        style={styles.cardForm}
                        cardStyle={styles.cardStyle}
                    />
                    <TouchableOpacity
                        style={[styles.buttonStylePay, { backgroundColor: cardDetails?.complete ? '#28e63f' : '#ccc' }]}
                        onPress={handlePayment}
                        disabled={!cardDetails?.complete}
                    >
                        <Text style={styles.buttonTextStylePay}>Pay {amount}lei</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default AddCardModal;