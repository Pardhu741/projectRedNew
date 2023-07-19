import React from "react";
import './index.css'
import Navbar from "../NavBar";
import Footer from "../Footer";
import { useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css'

function WhatWeDo() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const images = [
        'https://static.wixstatic.com/media/e0c28e_136f2867f2b74349b430c41edbfdf597~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_044c4abe7e9e4d50b1a627d6c1a79d0a~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_72c135319d0d4e418cf2977411f1233e~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_f78c949febfa4e599bee6b6c72f63d8c~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_a2b5bfecfdee42cba2542c5fae6385d7~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_8874ab1b319d47628029c2c7b0cb1809~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_e5b1e3bb9e114883a01bbb98439ad239~mv2.png',
        'https://static.wixstatic.com/media/e0c28e_587f341e1917404c9c8ea5ef3416d38a~mv2.jpeg'
    ]

    function openLinks(path) {
        window.open(path, "_blank")
    }

    return (
        <>
            <div class="overlay-container">
                <div class="background-image"></div>
                <Navbar />
                <div class="overlay-content">
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">What Project Red Is</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">Project Red aims to empower women to shed the “period taboo” by expanding awareness about menstrual hygiene and enabling access to sanitary products.</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '500px', overflow: 'hidden', marginRight: "3%" }}>
                            <Carousel
                                showArrows={true}
                                showThumbs={false}
                                emulateTouch={true}
                                infiniteLoop={true}
                                showStatus={false}
                                style={{ height: '100%', width: '100%' }} // Set carousel container height and width to 100% to fill its parent
                            >
                                {images.map((imageUrl, index) => (
                                    <div key={index} style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img
                                            src={imageUrl}
                                            alt={`Slide ${index + 1}`}
                                            style={{ maxHeight: '100%', width: 'auto' }}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '500px', overflow: 'hidden', marginLeft: "3%" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png" />
                        </div>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Project Red Impact</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">TProject Red aims to empower women to shed the “period taboo” by expanding awareness about menstrual hygiene and enabling access to sanitary products.</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Campaigns</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">Project Red has done 3 major awareness campaigns, which included pad vending machines, videos from gynaecologists, pad distribution drives and a handbook that contained all the relevant knowledge about menstruation. To know more, go to the Initiatives tab!</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '500px', overflow: 'hidden', marginRight: "3%" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_3bbc16b429c6469bbb6c00b50b34721d~mv2.jpeg" style={{ height: "500px" }} />
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '500px', overflow: 'hidden', marginLeft: "3%" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_d118f89d1f344afc98ad1b7ecd5195db~mv2.png" />
                        </div>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Research</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">I wrote a research paper on my findings from the surveys I conducted pre and post the awareness campaigns. To know more and read the research paper, go to the Initiatives tab!</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '6%', marginBottom: "6%" }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">In the News</h2>
                            <p style={{ width: "80%" }} className="text-para-mn">We work hard to get our efforts noticed by the media and are so proud when this goal comes to fruition.Take a look at some of our latest coverage and help spread the word about all the amazing developments at Project Red.</p>
                        </div>
                        <div className="container2 glob-mar-tp glob-marg-rig">
                            <div className="image2">
                                {/* <img src="https://static.wixstatic.com/media/e0c28e_1caa129ac69448b9be38bac0286ad1bf~mv2.jpeg" alt="Image 1" /> */}
                                <img src='https://static.wixstatic.com/media/e0c28e_6bdcedd095994ab198750eae0d2d1116~mv2.jpg/v1/fill/w_301,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20shots%20of%20digital%20news%20(5).jpg' alt="img1" />
                                <button className="button" onClick={() => openLinks('https://www.youtube.com/watch?v=wi_pC7jFTwU&list=PL3HhMTCWB-e82K4AKaYJVFCzhbbqMT3rV&index=13')}>Video With CNN News 18</button>
                            </div>
                            <div className="image2">
                                {/* <img src="https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png" alt="Image 2" /> */}
                                <img src='https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png/v1/fill/w_301,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-01-27%20at%207_09_16%20PM.png' alt="img2" />
                                <button className="button" onClick={() => openLinks('https://sociostory.org/impact-stories/meet-the-duo-who-are-on-a-mission-to-educate-the-rural-girls-and-women-on-a-taboo-topic-menstrual-health')}>Socio Story Article</button>
                            </div>
                            <div className="image2">
                                {/* <img src="https://static.wixstatic.com/media/e0c28e_6bdcedd095994ab198750eae0d2d1116~mv2.jpg" alt="Image 3" /> */}
                                <img src='https://static.wixstatic.com/media/e0c28e_1caa129ac69448b9be38bac0286ad1bf~mv2.jpeg/v1/fill/w_301,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-01-27%20at%207_42_44%20PM.jpeg' alt="img3" />
                                <button className="button" onClick={() => openLinks('https://www.youtube.com/watch?v=wi_pC7jFTwU&list=PL3HhMTCWB-e82K4AKaYJVFCzhbbqMT3rV&index=13')}>Local News</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"1%",marginBottom:"2%" }}></div>
                    <div className="glob-centre-2" style={{marginBottom:"2%"}}>
                        <h2 className="text-row-mn" style={{margin:"0px",marginBottom:"1%"}}>Donate</h2>
                        <p className="text-para-mn" style={{margin:"0px"}}>Every donation makes a difference, support Project Red by donating!</p>
                        <div class="button-container">
                            <button className="button" style={{ width: 'fit-content', marginRight: '5rem', paddingLeft: '15px', paddingRight: '15px', backgroundColor: '#55b553' }}>India Fund Raiser</button>
                            <button className="button" style={{ width: 'fit-content', paddingLeft: '15px', paddingRight: '15px', backgroundColor: '#55b553' }}>Singpore Fund Raiser</button>
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

export default WhatWeDo;