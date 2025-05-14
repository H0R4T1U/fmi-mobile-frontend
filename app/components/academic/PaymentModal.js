import React, {useState} from 'react';
import {Alert, Modal, Text, TouchableOpacity, View} from 'react-native';
import {CardForm, useConfirmPayment} from '@stripe/stripe-react-native';
import {Ionicons} from '@expo/vector-icons';
import Constants from "expo-constants";
import useEmail from "../../utils/hooks/useEmail";

const { BACKEND } = Constants.expoConfig.extra;

const AddCardModal = ({ visible, onClose, amount,tuitionCrt }) => {
    const { confirmPayment } = useConfirmPayment();
    const [cardDetails, setCardDetails] = useState(null);
    const [billingCountry, setBillingCountry] = useState('Romania');
    const [zipCode, setZipCode] = useState('');
    const {mail, mailError, mailLoading} = useEmail();


    const handlePayment = async () => {
        if (!cardDetails?.complete) {
            Alert.alert('Incomplete', 'Please complete the card details.');
            return;
        }


        const clientSecret = await fetchClientSecret();

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
            onClose(false);
        } else if (paymentIntent) {

                console.log(paymentIntent.id)
                // Trimite confirmarea către backend
                const resp=await fetch(`${BACKEND}/api/payment/success`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ paymentIntentId:paymentIntent.id, tuitionNumber:Number(tuitionCrt), payer:mail })
                });
                console.log(resp.status);

                Alert.alert('Success', 'Payment completed!');


            onClose(true);
        }
    };

    const fetchClientSecret = async () => {

        const response = await fetch(`${BACKEND}/api/payment/create-checkout-session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: Number(amount),tuitionNumber:tuitionCrt,payer:mail })
        });
        const data = await response.json();
        console.log("Stripe clientSecret:", data);
        return data.clientSecret;
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}

        >
            <View style={{flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'center',
                alignItems: 'center',}}>
                <View style={{
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 15,
                    width: '90%',
                    position: 'relative',
                }}>
                    {/* X Button */}
                    <TouchableOpacity style={{position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 10,
                        marginBottom:20

                    }} onPress={onClose}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>



                    <View style={{flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 20,
                        marginTop:15
                    }}>
                        <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: '#ccc',
                        }}/>
                        <Text style={{marginHorizontal: 10,
                            color: '#999',}}>Pay with a card</Text>
                        <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: '#ccc',
                        }} />
                    </View>

                    {/* Card Form */}
                    <CardForm
                        onFormComplete={(cardDetails) => setCardDetails(cardDetails)}

                        style={{  width: '100%',
                            height: 200,
                        }}
                        cardStyle={{
                            backgroundColor: "white",
                            textAlign: "center",
                        }}

                    />


                    {/* Pay Button */}
                    <TouchableOpacity
                        style={[{padding: 15,
                            borderRadius: 10,

                            alignItems: 'center',

                        }, { backgroundColor: cardDetails?.complete ? '#28e63f' : '#ccc' }]}
                        onPress={handlePayment}
                        disabled={!cardDetails?.complete}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>Pay {amount}lei</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default AddCardModal;