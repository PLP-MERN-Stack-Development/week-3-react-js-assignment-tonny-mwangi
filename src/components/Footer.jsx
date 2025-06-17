import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#222',
            color: '#fff',
            textAlign: 'center',
            padding: '1rem 0',
            position: 'fixed',
            zIndex: 1000,

            left: 0,
            bottom: 0,
            width: '100%'
        }}>
            <p>&copy; {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
        </footer>
    );
};

export default Footer;