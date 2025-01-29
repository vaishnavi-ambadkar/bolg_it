
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <h2>My Blog</h2>
            </div>
            <ul style={styles.navLinks}>
                <li>
                    <Link
                        to="/"
                        style={hovered === 'home' ? { ...styles.navLink, ...styles.navLinkHover } : styles.navLink}
                        onMouseEnter={() => setHovered('home')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        🏠Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/add-post"
                        style={hovered === 'add-post' ? { ...styles.navLink, ...styles.navLinkHover } : styles.navLink}
                        onMouseEnter={() => setHovered('add-post')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        Add Blog
                    </Link>
                </li>
                <li>
                    <Link
                        to="/list-posts"
                        style={hovered === 'list-posts' ? { ...styles.navLink, ...styles.navLinkHover } : styles.navLink}
                        onMouseEnter={() => setHovered('list-posts')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        List Blogs
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ff758c, #ff7eb3)', // Gradient pink background
        padding: '20px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontSize: '24px',
        fontWeight: '700',
    },
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: '500',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#ff477e', // Vibrant pink hover effect color
    },
};



export default Navbar;
