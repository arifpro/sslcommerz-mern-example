import axios from 'axios';
import Layout from '../components/Layout';

const Checkout = (props) => {
    console.log(props);

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

        // console.log(data);

        axios
            .post(`http://localhost:6000/api/payment/checkout`, JSON.stringify(data))
            // .get(`http://localhost:6000/api/payment/checkout`, data)
            // .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((error) => {
                console.log(error.message);
            });

        // axios
        //     .post('http://localhost:6000/api/payment/checkout/', data)
        //     .then((response) => console.log(response));

        // const options = {
        //     method: 'POST',
        //     body: data,
        // };
        // fetch('http://localhost:6000/api/payment/checkout/', options)
        //     // .then((response) => response.json())
        //     .then((response) => {
        //         console.log(response);
        //     });
    };

    return (
        <Layout title="Checkout">
            <h1 style={{ marginTop: '5rem' }}>Checkout Page</h1>
            <button type="button" onClick={() => onHandleCheckout()}>
                Click here to checkout order
            </button>
        </Layout>
    );
};

export default Checkout;
