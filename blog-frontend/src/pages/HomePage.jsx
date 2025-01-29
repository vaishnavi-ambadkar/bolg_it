
import React from 'react';
import { useSpring, animated } from 'react-spring';

const HomePage = () => {
    // Define the animation using useSpring
    const fadeInScale = useSpring({
        opacity: 1,
        transform: 'scale(1)',
        from: { opacity: 0, transform: 'scale(0.5)' },
        config: { duration: 1000 },
    });

    return (
        <div style={styles.container}>
            {/* Welcome section with cards */}
            <div style={styles.contentContainer}>
                <animated.h1 style={{ ...styles.welcomeText, ...fadeInScale }}>
                    WELCOME TO EXCITING BLOG ⭐
                </animated.h1>
                <p style={styles.additionalInfo}>
                    Let's dive into my collections of passion tutorials and check out my collections and add your own.
                </p>

                {/* Cards Section */}
                <div style={styles.cardContainer}>
                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}>Music🎼</h3>
                        <p style={styles.cardText}>
                        Music has always been a source of deep passion for me. It transcends the boundaries of mere sound, becoming a form of expression and a way to connect with others. Whether through playing instruments, producing tracks, or simply enjoying different genres, music offers me an endless source of creativity and inspiration. It’s not just about the melodies, but the emotions and stories they convey.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}>Technology 🖥️</h3>
                        <p style={styles.cardText}>
                        Technology is another area that fascinates me. From the latest gadgets to software development, technology is constantly evolving, shaping the way we live and work. I love staying on the cutting edge, learning new programming languages, experimenting with new tools, and seeing how they can improve my life and projects. It's an exciting field that keeps me engaged and always looking for innovative solutions.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}>Photography 📷</h3>
                        <p style={styles.cardText}>
                        Photography has been a creative outlet for me, allowing me to capture moments and stories visually. Whether it’s landscapes, portraits, or candid shots, I love how photography can convey emotion and tell a story in a single frame. 


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Styles for the homepage
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)', // Pink gradient
        padding: '20px',
    },
    contentContainer: {
        textAlign: 'center',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    welcomeText: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: 'white', // White for strong contrast
    },
    additionalInfo: {
        fontSize: '20px',
        color: 'white', // White text to complement the gradient
        marginTop: '20px',
        lineHeight: '1.6',
        marginBottom: '40px',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        gap: '20px',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor: '#ffe4e6', // Light pink background
        padding: '20px',
        borderRadius: '10px',
        width: '30%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
    },
    cardTitle: {
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '15px',
        color: '#b61881', // Dark pink title color
    },
    cardText: {
        fontSize: '16px',
        color: '#6a1b9a', // Deep purple-pink text for better contrast
        lineHeight: '1.5',
    },
    // Hover effect for cards
    cardHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    },
};

export default HomePage;
