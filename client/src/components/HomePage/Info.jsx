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
        <p>
            Edit <code>src/App.jsx</code> and save to reload.
        </p>
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
