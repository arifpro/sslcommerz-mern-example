const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <main style={{ textAlign: 'center' }}>
            <h1>Footer | {year}</h1>
        </main>
    );
};

export default Footer;
