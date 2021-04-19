import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, title }) => (
    <main>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Navbar />
        {children}
        <Footer />
    </main>
);

export default Layout;
