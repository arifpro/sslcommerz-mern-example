import axios from 'axios';
import { useState } from 'react';
import CustomInput from '../custom/CustomInput';

const CheckoutForm = ({ location }) => {
    const [paymentUrl, setPaymentUrl] = useState('');

    const onHandleCheckout = () => {
        const data = {
            cartItems: [],
            totalAmount: 150,
            deliveryMethod: 'Courier',
            numItem: 2,
            customerInfo: {
                cusName: 'customer name',
                cusEmail: 'customer email',
                cusAdd1: 'customer address 1',
                cusAdd2: 'customer address 2',
                cusCity: 'customer city',
                cusState: 'customer state',
                cusPostcode: 'customer postcode',
                cusCountry: 'Bangladesh',
                cusPhone: 'customer phone',
                cusFax: 'customer fax',
            },
            shippingInfo: {
                name: 'customer name for shipping',
                shippingAdd1: 'shipping address 1',
                shippingAdd2: 'shipping address 2',
                shippingCity: 'shipping city',
                shippingState: 'shipping state',
                shippingPostcode: 'shipping postcode',
                shippingCountry: 'Bangladesh',
            },
        };

        const SERVER_URL =
            process.env.REACT_APP_SERVER_URL || 'https://sslcommerz-node.herokuapp.com';

        axios
            .post(`${SERVER_URL}/api/payment/checkout`, data)
            .then((res) => setPaymentUrl(res.data))
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div>
            <CustomInput />
            <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                <button
                    type="button"
                    onClick={() => onHandleCheckout()}
                    style={{
                        margin: '2.5rem 0',
                        padding: '8px 14px',
                        border: 'none',
                        background: 'black',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        borderRadius: '25px',
                    }}
                >
                    Click here to checkout your order
                </button>
                {location.pathname.search('transaction_') !== -1 && (
                    <>
                        <h3 style={{ margin: '2.5rem 0' }}>payment successful</h3>
                        <h4 style={{ margin: '2.5rem 0' }}>
                            Your transaction id is{' '}
                            <strong style={{ color: 'gray' }}>
                                {location.pathname.split('/')[2]}
                            </strong>
                        </h4>
                    </>
                )}
                <div style={{ margin: '2.5rem 0', padding: '0 2rem' }}>
                    <a href={paymentUrl}>{paymentUrl}</a>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
