import React, { useState } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);

    const handleToggle = () => setDarkMode((prev) => !prev);

    const currentStyles = {
        nav: {
            ...styles.nav,
            background: darkMode ? '#333' : '#f5f5f5',
            color: darkMode ? '#fff' : '#222',
        },
        logo: {
            ...styles.logo,
            color: darkMode ? '#fff' : '#222',
        },
        navLinks: styles.navLinks,
        link: {
            ...styles.link,
            color: darkMode ? '#fff' : '#222',
        },
        button: {
            marginLeft: '20px',
            padding: '6px 14px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            background: darkMode ? '#555' : '#ddd',
            color: darkMode ? '#fff' : '#222',
        }
    };

    return (
        <nav style={currentStyles.nav}>
            <div style={currentStyles.logo}>MyApp</div>
            <ul style={currentStyles.navLinks}>
                <li><a href="/" style={currentStyles.link}>Home</a></li>
                <li><a href="/about" style={currentStyles.link}>About</a></li>
                <li><a href="/contact" style={currentStyles.link}>Contact</a></li>
            </ul>
            <button style={currentStyles.button} onClick={handleToggle}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'sticky',
        zIndex: 1000,
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#333',
        padding: '10px 20px',
        color: '#fff',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    }
};

export default Navbar;