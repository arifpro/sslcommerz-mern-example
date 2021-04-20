import CheckoutForm from '../components/CheckoutPage/CheckoutForm';
import Layout from '../components/Layout';

const Checkout = (props) => {
    const { location } = props;

    return (
        <Layout title="Checkout">
            <CheckoutForm location={location} />
        </Layout>
    );
};

export default Checkout;
