import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react-logo.png';
import styles from '../../styles/InfoStyles.module.scss';

const Info = () => (
    <main className={styles.home}>
        <a
            href="http://thetechdevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.home__logo}
        >
            <img
                loading="lazy" // Image Optimize by lazy loading
                src={reactLogo}
                alt="React Logo"
                className={styles.home__reactLogo}
            />
        </a>
        <Link to="/checkout">
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
                Go to the checkout page for sslcommerz example
            </button>
        </Link>
        <a
            className={styles.home__link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </main>
);

export default Info;
