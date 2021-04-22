import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { VscLoading } from 'react-icons/vsc';
import { MultiStepForm, Step } from 'react-multi-form';
import cartData from '../../data';
import styles from '../../styles/CheckoutStyles.module.scss';
import Layout from '../Layout';
import CartItems from './CartItems';
import CustomerInfo from './CustomerInfo';
import PaymentInfo from './PaymentInfo';
import ShippingInfo from './ShippingInfo';

const CheckoutPage = () => {
    const [active, setActive] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState({
        firstName: '',
        lastName: '',
    });
    const [formData, setFormData] = useState({
        cartItems: cartData,
        totalAmount: 3870.85,
        deliveryMethod: 'Courier',
        numItem: cartData.length,
        customerInfo: {
            cusName: '',
            cusEmail: '',
            cusAdd1: '',
            cusAdd2: '',
            cusCity: '',
            cusState: '',
            cusPostcode: '',
            cusCountry: 'Bangladesh',
            cusPhone: '',
            cusFax: '',
        },
        shippingInfo: {
            name: '',
            shippingAdd1: '',
            shippingAdd2: '',
            shippingCity: '',
            shippingState: '',
            shippingPostcode: '',
            shippingCountry: 'Bangladesh',
        },
    });

    const onNameChange = (event) => {
        setName({
            ...name,
            [event.target.name]: event.target.value.trim(),
        });
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value.trim(),
        });
    };

    const handleInputChangeCustomer = (event) => {
        setFormData({
            ...formData,
            customerInfo: {
                ...formData.customerInfo,
                [event.target.name]: event.target.value.trim(),
            },
        });
    };

    const handleInputChangeShopping = (event) => {
        setFormData({
            ...formData,
            shippingInfo: {
                ...formData.shippingInfo,
                [event.target.name]: event.target.value.trim(),
            },
        });
    };

    const onHandleCheckout = async () => {
        setLoading(true);

        const SERVER_URL =
            process.env.REACT_APP_SERVER_URL || 'https://sslcommerz-node.herokuapp.com';

        const res = await axios.post(`${SERVER_URL}/api/payment/checkout`, formData);

        console.log(res.data);
        if (res.data?.length > 30) {
            setLoading(false);
            window.location.replace(res.data);
        } else {
            alert('Checkout failed'); // eslint-disable-line no-alert
        }
    };

    useEffect(() => {
        setFormData({
            ...formData,
            customerInfo: {
                ...formData.customerInfo,
                cusName: `${name.firstName} ${name.lastName}`,
            },
        });
    }, [name]);

    useEffect(() => {
        setFormData({
            ...formData,
            shippingInfo: {
                ...formData.shippingInfo,
                name: formData.customerInfo.cusName,
                shippingAdd1: formData.customerInfo.cusAdd1,
                shippingAdd2: formData.customerInfo.cusAdd2,
                shippingCity: formData.customerInfo.cusCity,
                shippingState: formData.customerInfo.cusState,
                shippingPostcode: formData.customerInfo.cusPostcode,
                shippingCountry: formData.customerInfo.cusCountry,
            },
        });
    }, [formData.customerInfo]);

    return (
        <Layout>
            <main className={styles.checkout}>
                <aside className={styles.checkout__cartItems} style={{ width: '300px' }}>
                    <h3
                        style={{
                            textAlign: 'center',
                            fontFamily: 'Comic Sans MS',
                            fontWeight: 'bold',
                        }}
                    >
                        Order Summary
                    </h3>
                    <CartItems
                        checkoutBtn={false}
                        customStyles={{
                            boxShadow: 'none',
                            backgroundImage: 'none',
                            background: '#f5f5f5',
                        }}
                        divStyle={{ background: '#e2e2e2' }}
                    />
                </aside>

                <aside className={styles.checkout__checkoutForm}>
                    <MultiStepForm activeStep={active}>
                        <Step label="Customer">
                            <CustomerInfo
                                formData={formData}
                                setFormData={setFormData}
                                name={name}
                                setName={setName}
                                onNameChange={onNameChange}
                                handleInputChangeCustomer={handleInputChangeCustomer}
                                setError={setError}
                            />
                        </Step>
                        <Step label="Shipping">
                            <ShippingInfo
                                formData={formData}
                                setFormData={setFormData}
                                name={name}
                                setName={setName}
                                onNameChange={onNameChange}
                                handleInputChangeShopping={handleInputChangeShopping}
                                setError={setError}
                            />
                        </Step>
                        <Step label="Payment">
                            <PaymentInfo
                                formData={formData}
                                handleInputChange={handleInputChange}
                                setError={setError}
                            />
                        </Step>
                    </MultiStepForm>

                    {error !== '' && <div className={styles.error}>{error}</div>}

                    {active !== 1 && (
                        <button
                            type="button"
                            className={styles.textBtn}
                            onClick={() => setActive(active - 1)}
                        >
                            <span>
                                <IoIosArrowBack /> &nbsp; Previous
                            </span>
                        </button>
                    )}
                    {active !== 3 ? (
                        <button
                            type="button"
                            onClick={() => {
                                if (
                                    active === 1 &&
                                    name.firstName !== '' &&
                                    name.lastName !== '' &&
                                    formData.customerInfo.cusAdd1 !== '' &&
                                    formData.customerInfo.cusPhone !== '' &&
                                    formData.customerInfo.cusEmail !== '' &&
                                    formData.customerInfo.cusCity !== '' &&
                                    formData.customerInfo.cusState !== '' &&
                                    formData.customerInfo.cusPostcode !== ''
                                ) {
                                    setActive(active + 1);
                                } else if (
                                    active === 2 &&
                                    name.firstName !== '' &&
                                    name.lastName !== '' &&
                                    formData.shippingInfo.shippingAdd1 !== '' &&
                                    formData.shippingInfo.shippingCity !== '' &&
                                    formData.shippingInfo.shippingState !== '' &&
                                    formData.shippingInfo.shippingPostcode !== ''
                                ) {
                                    setActive(active + 1);
                                } else {
                                    setError('Required fields must be provided');
                                }
                            }}
                            className={styles.textBtn}
                            style={{ float: 'right' }}
                        >
                            <span>
                                Next &nbsp; <IoIosArrowForward />
                            </span>
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.checkout__checkoutForm__btn}
                            id="button"
                            style={{ marginTop: '2rem' }}
                            onClick={() => onHandleCheckout()}
                            disabled={loading}
                        >
                            {loading && (
                                <>
                                    <VscLoading className={styles.checkout__loading__icon} />
                                    <span>Checking out...</span>
                                </>
                            )}
                            {!loading && <span>Checkout</span>}
                        </button>
                    )}
                </aside>
            </main>
        </Layout>
    );
};

export default CheckoutPage;
