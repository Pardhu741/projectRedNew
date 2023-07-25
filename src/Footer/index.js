import React from "react";
import './index.css'
import { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {

    function handleOpens(path) {
        window.open(path, '_blank')
    }

    return (
        <footer class="footer">
            <div class="footer-left">
                <div class="block">
                    <h4 className="footer-text">ABOUT US</h4>
                    <p style={{ width: "400px" }} className="footer-text">
                        Project Red aims to empower women to shed the “period taboo” by expanding awareness about menstrual hygiene and enabling access to sanitary products.
                    </p>
                </div>
                {/* <div class="block">
                    <p className="footer-text">&copy; 2035 by Make A Change.</p>
                </div> */}
            </div>
            <div class="footer-right">
                <div class="block">
                    {/* <h4 className="footer-text">FACEBOOK</h4> */}
                    {/* <h4 className="footer-text">TWITTER</h4> */}
                    <div style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
                    <InstagramIcon/>
                    <p className="footer-text" style={{ cursor: "pointer",marginLeft:"10px"}} onClick={() => handleOpens('https://www.instagram.com/project_r3d/?hl=en')}>project_r3d</p>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
                        <EmailIcon/>
                    <p className="footer-text" style={{marginLeft:"10px"}}>pprojectred@gmail.com</p>
                    </div>
                    {/* <h4 className="footer-text" style={{ cursor: "pointer" }} onClick={() => handleOpens('https://www.instagram.com/project_r3d/?hl=en')}><span style={{marginTop:"3px"}}>
                        <InstagramIcon/>
                        </span>INSTAGRAM</h4> */}
                </div>
                {/* <div class="block">
                    <h4 className="footer-text">CONTACT</h4>
                    <p className="footer-text">500 Terry Francois Street, 6th Floor. San Francisco, CA 94158</p>
                    <div style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
                        <EmailIcon/>
                    <p className="footer-text" style={{marginLeft:"10px"}}>pprojectred@gmail.com</p>
                    </div>
                    <p className="footer-text">123-456-7890</p>
                </div> */}
            </div>
        </footer>

    )
}

export default Footer;