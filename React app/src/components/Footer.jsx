import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h2 className="footer-logo">MyWebsite</h2>

                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <p className="footer-text">
                    © {year} MyWebsite. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;