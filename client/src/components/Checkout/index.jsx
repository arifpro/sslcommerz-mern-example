import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MultiStepForm, Step } from 'react-multi-form';
import cartData from '../../data';
import Layout from '../Layout';
import AccountInfo from './AccountInfo';
import CartSidebar from './CartSidebar';
import styles from './CheckoutStyles.module.css';
import PaymentInfo from './PaymentInfo';
import ShippingInfo from './ShippingInfo';

const Checkout = () => {
    const [active, setActive] = useState(1);
    const [error, setError] = useState('');
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
            name: 'customer name for shipping',
            shippingAdd1: 'shipping address 1',
            shippingAdd2: 'shipping address 2',
            shippingCity: 'shipping city',
            shippingState: 'shipping state',
            shippingPostcode: 'shipping postcode',
            shippingCountry: 'Bangladesh',
        },
    });

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

    useEffect(() => {
        console.log(formData);
    }, [formData]);

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
                    <CartSidebar
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
                            <AccountInfo
                                formData={formData}
                                setFormData={setFormData}
                                handleInputChangeCustomer={handleInputChangeCustomer}
                                setError={setError}
                            />
                        </Step>
                        <Step label="Shipping">
                            <ShippingInfo
                                formData={formData}
                                setFormData={setFormData}
                                // handleInputChange={handleInputChange}
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
                        {/* <Step label="Review">
                            <div style={{ textAlign: 'center' }}>
                                <h1>Payment Success</h1>
                                <Link to="/">
                                    <button type="button" className={styles.checkoutForm__btn}>
                                        Go to the Home page
                                    </button>
                                </Link>
                            </div>
                        </Step> */}
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
                                    formData.firstName !== '' &&
                                    formData.lastName !== '' &&
                                    formData.phone !== ''
                                ) {
                                    setActive(active + 1);
                                } else if (
                                    active === 2 &&
                                    formData.streetAddress !== '' &&
                                    formData.city !== '' &&
                                    formData.state !== '' &&
                                    formData.phone !== ''
                                ) {
                                    setActive(active + 1);
                                } else if (active === 3) {
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
                        <button type="button" className={styles.btn} style={{ marginTop: '2rem' }}>
                            <span>Checkout</span>
                        </button>
                    )}
                </aside>

                {/* <aside className={styles.checkout__cartItems} style={{ width: '300px' }}>
                    <h3
                        style={{
                            textAlign: 'center',
                            fontFamily: 'Comic Sans MS',
                            fontWeight: 'bold',
                        }}
                    >
                        Order Summary
                    </h3>
                    <CartSidebar
                        checkoutBtn={false}
                        customStyles={{
                            boxShadow: 'none',
                            backgroundImage: 'none',
                            background: '#f5f5f5',
                        }}
                        divStyle={{ background: '#e2e2e2' }}
                    />
                </aside> */}
            </main>
        </Layout>
    );
};

export default Checkout;
