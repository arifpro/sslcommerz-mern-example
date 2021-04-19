import { Link, NavLink } from 'react-router-dom';

// images
import logo from '../../assets/logo.png';

// styles
import styles from '../../styles/NavbarStyles.module.scss';

// load pages by on hover (Eager Loading)
const about = () => import('../../routes/About');
const home = () => import('../../routes/Home');

const Navbar = () => (
    <main className={styles.navbar}>
        <Link to="/">
            {/* Image Optimize by lazy loading */}
            <img loading="lazy" src={logo} alt="logo" height="30px" />
        </Link>

        <section>
            <NavLink exact to="/" onMouseOver={() => home()} activeClassName={styles.selected}>
                Home
            </NavLink>
            <NavLink
                exact
                to="/about"
                onMouseOver={() => about()}
                activeClassName={styles.selected}
            >
                About
            </NavLink>
        </section>
    </main>
);

export default Navbar;
