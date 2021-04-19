import AboutDetails from '../components/AboutPage/AboutDetails';
import Header from '../components/AboutPage/Header';
import Layout from '../components/Layout';

const About = () => {
    const name = 'About';

    return (
        <Layout title="About">
            <h1>{name} page</h1>
            <Header />
            <AboutDetails />
        </Layout>
    );
};

export default About;
