const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <main style={{ textAlign: 'center' }}>
            <p>Footer | {year}</p>
        </main>
    );
};

export default Footer;
