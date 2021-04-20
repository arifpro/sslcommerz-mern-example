const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <main
            style={{
                textAlign: 'center',
                position: 'fixed',
                bottom: 0,
                background: '#3c444c',
                color: '#bdbdbd',
                width: '100%',
                padding: '10px 20px',
                fontFamily: 'Comic Sans MS',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
            }}
        >
            <p>All rights reserved | {year}</p>
        </main>
    );
};

export default Footer;
