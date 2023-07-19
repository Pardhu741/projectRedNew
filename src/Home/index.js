import React from 'react'
import Navbar from '../NavBar'
import Footer from '../Footer';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import './index.css'
import '../global.css'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    let textArray = ["Empowering Women Through Menstrual Hygiene", "Take Action to Break the Period Taboo", "Make a Difference in Women's Lives"]
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const isSmallScreen = useMediaQuery('(max-width: 800px)');

    const handleNavigation = (path) => {
        navigate(path);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) =>
                (prevIndex + 1) % textArray.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div>
            <Navbar />
            <div style={{ position: 'relative' }}>
                <video
                    src="https://video.wixstatic.com/video/11062b_f2ce57f5f142464e8142360b7b1c326f/720p/mp4/file.mp4"
                    autoPlay
                    muted
                    loop
                    style={{ width: '100%', height: 'auto', opacity: 0.9 }}
                />
                {!isSmallScreen ? <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '76px',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <span>{textArray[currentTextIndex]}</span>
                    <br />
                </div> :
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <span>{textArray[currentTextIndex]}</span>
                        <br />
                    </div>
                }
            </div>
            <div class="container">
                <div class="content glob-centre-2" >
                    <h2 className={isSmallScreen ? 'head-text-sm' : 'head-text'}>PROJECT RED</h2>
                    <p className={isSmallScreen ? 'para-text-sm' : 'para-text'}>Pads should be a necessity not a luxury!</p>
                </div>
                <div class="image">
                    <img src="https://static.wixstatic.com/media/11062b_b4f60dc9061841099f2515b5f0ea4fc3~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_b4f60dc9061841099f2515b5f0ea4fc3~mv2.jpg" alt="Project RED" />
                </div>
            </div>
            <div className="image-container">
                <div className="image-wrapper">
                    <img src="https://static.wixstatic.com/media/9c608a_84dd07f87f0848c4b78f0f134135029a~mv2_d_4272_2848_s_4_2.jpg" alt="Image 1" />
                    <div className="overlay" style={{ backgroundColor: 'rgba(24, 21, 124, 0.8)' }}>
                        <div className='text-cont' style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                            <h2 className={isSmallScreen ? 'head-text-sm-2' : 'head-text-2'}>WHAT WE DO</h2>
                            <p className={isSmallScreen ? 'para-text-sm-2' : 'para-text-2'}>Our Mission</p>
                            <EastOutlinedIcon style={{
                                color: 'white',
                                fontSize: '42px',
                                cursor:'pointer'
                            }} 
                            onClick={() => handleNavigation('/whatWeDo')}
                            />
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src="https://static.wixstatic.com/media/9c608a_f5de6f7f1e9a42b8a25b295d2fb2469b~mv2_d_2880_1920_s_2.jpg" alt="Image 2" />
                    <div className="overlay" style={{ backgroundColor: 'rgba(77, 130, 239, 0.8)' }}>
                        <div className='text-cont' style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                            <h2 className={isSmallScreen ? 'head-text-sm-2' : 'head-text-2'}>WHO WE ARE</h2>
                            <p className={isSmallScreen ? 'para-text-sm-2' : 'para-text-2'}>Our Imapct</p>
                            <EastOutlinedIcon style={{
                                color: 'white',
                                fontSize: '42px',
                                cursor:'pointer'
                            }} 
                            onClick={() => handleNavigation('/whoWe')}
                            />
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src="https://static.wixstatic.com/media/9c608a_4045aefc9d9e4d00ae94c0718258d899~mv2_d_4544_3029_s_4_2.jpg" alt="Image 3" />
                    <div className="overlay" style={{ backgroundColor: 'rgba(172, 213, 161, 0.8)' }}>
                        <div className='text-cont' style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                            <h2 className={isSmallScreen ? 'head-text-sm-2' : 'head-text-2'}>OUR WORK</h2>
                            <p className={isSmallScreen ? 'para-text-sm-2' : 'para-text-2'}>Upcoming Events</p>
                            <EastOutlinedIcon style={{
                                color: 'white',
                                fontSize: '42px'
                            }} />
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src="https://static.wixstatic.com/media/9c608a_86e9bc49a0634156b4c80e5a00e2225c~mv2_d_3000_2000_s_2.jpg" alt="Image 4" />
                    <div className="overlay" style={{ backgroundColor: 'rgba(234, 222, 113, 0.8)' }}>
                        <div className='text-cont' style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                            <h2 className={isSmallScreen ? 'head-text-sm-2' : 'head-text-2'}>JOIN US</h2>
                            <p className={isSmallScreen ? 'para-text-sm-2' : 'para-text-2'}>Join The Movement</p>
                            <EastOutlinedIcon style={{
                                color: 'white',
                                fontSize: '42px'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'2rem'}} className={isSmallScreen? 'glob-start':'glob-centre'}>
            <Footer />
            </div>
        </div>
    )
}

export default Home