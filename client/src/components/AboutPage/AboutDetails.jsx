const NavItem = ({ title, link }) => (
    <p style={{ marginBottom: '7px' }}>
        <strong>{title}:</strong>{' '}
        <a href={link} style={{ color: '#20b9ff' }} target="_blank" rel="noopener noreferrer">
            {link}
        </a>
    </p>
);

const AboutDetails = () => (
    <main>
        <section style={{ textAlign: 'center' }}>
            <NavItem title="Website" link="http://thetechdevs.com" />
            <NavItem title="Github Organization" link="https://github.com/thetechdevs" />
            <NavItem title="Facebook" link="https://www.facebook.com/thetechdevs.bd" />
            <NavItem title="ThemeForest" link="https://themeforest.net/user/thetechdevs" />
            <NavItem title="LinkedIn" link="https://www.linkedin.com/company/thetechdevs" />
            <p style={{ marginBottom: '7px' }}>
                <strong>Email:</strong> thetechdevs@gmail.com, info@thetechdevs.com
            </p>
        </section>

        <section style={{ marginTop: '4rem', marginLeft: '6rem' }}>
            <h3 style={{ marginBottom: '1rem', marginLeft: '-2rem' }}>Tech/framework we use</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Material-UI</li>
                <li>SASS</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>NodeJs</li>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Hosting (cPanel, Github pages, Netlify, Firebase, Vercel, etc.)</li>
            </ul>
        </section>
    </main>
);

export default AboutDetails;
