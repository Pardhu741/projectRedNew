import React from "react";
import './index.css'

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-left">
                <div class="block">
                    <h4 className="footer-text">ABOUT US</h4>
                    <p style={{width:"400px"}} className="footer-text">
                        I'm a paragraph. Click here to edit and add your own text. Is easy! Just click on "Edit Text" or double-click on me and you can add your own content and change fonts.
                    </p>
                </div>
                <div class="block">
                    <p className="footer-text">&copy; 2035 by Make A Change.</p>
                </div>
            </div>
            <div class="footer-right">
                <div class="block">
                    <h4 className="footer-text">FACEBOOK</h4>
                    <h4 className="footer-text">TWITTER</h4>
                    <h4 className="footer-text">INSTAGRAM</h4>
                </div>
                <div class="block">
                    <h4 className="footer-text">CONTACT</h4>
                    <p className="footer-text">500 Terry Francois Street, 6th Floor. San Francisco, CA 94158</p>
                    <p className="footer-text">pprojectred@gmail.com</p>
                    <p className="footer-text">123-456-7890</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;