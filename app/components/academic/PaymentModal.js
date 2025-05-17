import React, {useState} from 'react';
import {Alert, Modal, Text, TouchableOpacity, View} from 'react-native';
import {CardForm, useConfirmPayment} from '@stripe/stripe-react-native';
import {Ionicons} from '@expo/vector-icons';
import Constants from "expo-constants";
import useEmail from "../../utils/hooks/useEmail";
import useToken from "../../utils/hooks/useToken";

const { BACKEND } = Constants.expoConfig.extra;

const AddCardModal = ({ visible, onClose, amount,tuitionCrt,setsuccess }) => {
    const { confirmPayment } = useConfirmPayment();
    const [cardDetails, setCardDetails] = useState(null);
    const [billingCountry, setBillingCountry] = useState('Romania');
    const [zipCode, setZipCode] = useState('');
    const {mail, mailError, mailLoading} = useEmail();
    const {token, tokenError, tokenLoading} = useToken();
    console.log(mail);

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

                console.log(paymentIntent.id)

                const resp=await fetch(`${BACKEND}/api/payment/success?paymentIntentId=${paymentIntent.id}`, {
                    method: 'POST',
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
            body: JSON.stringify({ amount: Number(amount),tuitionNumber:Number(tuitionCrt),payer:mail })
        });
        const data = await response.json();
        console.log(data.error)
        console.log("Stripe clientSecret:", data);

        if(!data.error)
            return data.clientSecret;
        else
            Alert.alert("Error",data.error);
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