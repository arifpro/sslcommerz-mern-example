// import CheckoutForm from '../components/CheckoutPage/CheckoutForm';
import Layout from '../components/Layout';
import Checkout2 from '../components/Checkout';

const Checkout = (props) => {
    const { location } = props;
    console.log(location);

    return (
        <Layout title="Checkout">
            {/* <CheckoutForm location={location} /> */}
            <Checkout2 />
        </Layout>
    );
};

export default Checkout;
