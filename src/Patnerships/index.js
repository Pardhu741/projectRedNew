import React, { useState } from 'react'
import Navbar from "../NavBar";
import Founder from '../founder.jpg'
import Footer from "../Footer";
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import logo1 from '../logo1.png'
import logo2 from '../logo2.jpeg'
import logo3 from '../logo3.webp'
import logo4 from '../logo4.jpeg'
import logo5 from '../logo5.png'
import logo6 from '../logo6.jpeg'
import logo7 from '../logo7.jpeg'
import logo8 from '../logo8.png'
import logo9 from '../logo9.jpeg'
import logo10 from '../c3ind.png'
import './index.css'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


const Patnerships = () =>{

    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const [tab, setTab] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        {console.log(tab, 'assined tab')}
        <div className="overlay-container">
            <div className="background-image"></div>
            <Navbar />
            <div className="overlay-content">
                <div class="content glob-centre-9" style={{ marginLeft: "8%" }}>
                    <h2 style={{ marginTop: '0px', marginBottom: "0px" }} className="text-row-mn2">PARTNERSHIPS</h2>
                </div>
                <div className="mod-div-n marg-div shadow-div2" style={{ marginBottom: '4%' }}>
                    <div className="logos-container">
                        <img src={logo1} alt="Logo 1" className="logo" />
                        <img src={logo2} alt="Logo 2" className="logo" />
                        <img src={logo3} alt="Logo 3" className="logo" />
                        <img src={logo4} alt="Logo 1" className="logo" />
                        <img src={logo5} alt="Logo 2" className="logo" />
                        {/* <img src={logo6} alt="Logo 3" className="logo" />
                        <img src={logo7} alt="Logo 1" className="logo" />
                        <img src={logo8} alt="Logo 2" className="logo" />
                        <img src={logo9} alt="Logo 3" className="logo" /> */}
                    </div>
                </div>
                <div className="mod-div-n marg-div shadow-div2" style={{ marginBottom: '4%' }}>
                    <div className="logos-container">
                        {/* <img src={logo1} alt="Logo 1" className="logo" />
                        <img src={logo2} alt="Logo 2" className="logo" />
                        <img src={logo3} alt="Logo 3" className="logo" />
                        <img src={logo4} alt="Logo 1" className="logo" />
                        <img src={logo5} alt="Logo 2" className="logo" /> */}
                        <img src={logo6} alt="Logo 3" className="logo" />
                        <img src={logo7} alt="Logo 1" className="logo" />
                        <img src={logo8} alt="Logo 2" className="logo" />
                        <img src={logo9} alt="Logo 3" className="logo" />
                        <img src={logo10} alt="Logo 1" className="logo" />
                    </div>
                </div>

                <div className="mod-div-n marg-div shadow-div2" style={{ marginBottom: '4%' }}>
                    <div className="logos-container2" style={{marginRight:"6%"}}>
                    <div class="content" style={{ marginLeft: "8%" }}>
                        <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Shriram Foundation</h2>
                        <img src={logo8} alt="Logo 2" className="logo" />
                        <p style={{ width: "100%" }} className="text-para-mn">Shriram Foundation is continuously working towards creating inclusive and democratic learning spaces where each child is empowered and happy. Our "Mission 100" aims to provide progressive, quality education will create the way for development and peace in our rural areas.</p>
                    </div>
                    <div class="content" style={{ marginLeft: "8%" }}>
                        <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Taarini Foundation</h2>
                        <img src={logo4} alt="Logo 1" className="logo" />
                        <p style={{ width: "100%" }} className="text-para-mn">Taarini Foundation through it 's "PROJECT MAHINA" aims to spread awareness and organises outreach programme for Menstrual Health Management, and advocacy for improved standards of Reproductive, Sexual and Menstrual Health amongst women across ages and communities.</p>
                    </div>
                    <div class="content" style={{ marginLeft: "8%" }}>
                        <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">C3India</h2>
                        <img src={logo10} alt="Logo 1" className="logo" />
                        <p style={{ width: "100%" }} className="text-para-mn">For 30 years, C3India worked with a visionary zeal to enable women and girls in India to be fully empowered, equipped to realize their rights, access opportunities and achieve gender equality. We have remained focused on one single mission – to make the lives of girls and women in India better. By enabling an environment which provides an equal opportunity to them. By ensuring that they grow up as educated, informed, confident citizens of India; live dignified and healthy lives; and emerge as leaders at the frontline. This is what we strive to achieve. For EveryGirl, EveryWoman, EveryWhere.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ marginTop: '2rem' }} className={isSmallScreen ? 'glob-start' : 'glob-centre'}>
            <Footer />
        </div>
    </>
    )
}

export default Patnerships