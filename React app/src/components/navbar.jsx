import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">MyApp</h2>

            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;