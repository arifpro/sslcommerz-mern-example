import reactLogo from '../../assets/react-logo.png';
import styles from '../../styles/LoadingStyles.module.scss';

const Loading = () => (
    <main className={styles.loading}>
        <a
            href="http://thetechdevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.loading__logo}
        >
            <img
                loading="lazy" // Image Optimize by lazy loading
                src={reactLogo}
                alt="React Logo"
                className={styles.loading__reactLogo}
            />
        </a>
    </main>
);

export default Loading;
