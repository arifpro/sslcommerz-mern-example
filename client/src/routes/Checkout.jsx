// import CheckoutForm from '../components/CheckoutPage/CheckoutForm';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutPage from '../components/CheckoutPage';
import Layout from '../components/Layout';

const Checkout = (props) => {
    const { location } = props;
    const [response, setResponse] = useState('');
    const path = location.pathname?.split('/')[2];

    useEffect(() => {
        if (path && path === 'success') setResponse('success');
        else if (path && path === 'fail') setResponse('failed');
        else if (path && path === 'cancel') setResponse('canceled');
    }, []);

    return (
        <Layout title="Checkout">
            {response.length > 0 && (
                <div style={{ margin: '5rem', textAlign: 'center' }}>
                    <h3
                        style={{
                            margin: '2.5rem 0',
                            color:
                                // eslint-disable-next-line no-nested-ternary
                                response === 'success'
                                    ? 'green'
                                    : response === 'failed'
                                    ? 'red'
                                    : '#ff8300',
                        }}
                    >
                        payment {response}
                    </h3>
                    {response === 'success' && (
                        <h4 style={{ margin: '2.5rem 0' }}>
                            Your transaction id is{' '}
                            <strong style={{ color: 'gray' }}>
                                {location.pathname.split('/')[3]}
                            </strong>
                        </h4>
                    )}

                    <Link to="/">
                        <button
                            type="button"
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
                            Go back to home page
                        </button>
                    </Link>
                </div>
            )}

            <CheckoutPage />
        </Layout>
    );
};

export default Checkout;
