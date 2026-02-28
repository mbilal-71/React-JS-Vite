import React from "react";

function Navbar() {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>MyApp</h2>

            <ul style={styles.navLinks}>
                <li style={styles.link}>Home</li>
                <li style={styles.link}>About</li>
                <li style={styles.link}>Services</li>
                <li style={styles.link}>Contact</li>
            </ul>
        </nav>
    );
}