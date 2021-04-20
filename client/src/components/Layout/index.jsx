import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, title }) => (
    <main>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Navbar />
        <div style={{ margin: '3rem 0' }}>{children}</div>
        <Footer />
    </main>
);

export default Layout;
