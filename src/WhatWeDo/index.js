import React from "react";
import './index.css'
import Navbar from "../NavBar";
import Footer from "../Footer";
import { useEffect } from "react";
import { useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import CircleIcon from '@mui/icons-material/Circle';
import Founder from '../founder.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css'

function WhatWeDo() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const images = [
        'https://static.wixstatic.com/media/e0c28e_136f2867f2b74349b430c41edbfdf597~mv2.jpeg',
        'https://res.cloudinary.com/dcewbqlgf/image/upload/v1690301682/project_red/WhatsApp_Image_2020-12-02_at_7.06.12_PM_2_lvjghr.jpg',
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

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div class="overlay-container">
                <div class="background-image"></div>
                <Navbar />
                <div class="overlay-content">
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">What Is Project Red ?</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">Project Red aims to empower women to shed the “period taboo” by expanding awareness about menstrual hygiene and enabling access to sanitary products.</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '500px', overflow: 'hidden', marginRight: "3%" }}>
                            <Carousel
                                showArrows={true}
                                showThumbs={false}
                                emulateTouch={true}
                                infiniteLoop={true}
                                showStatus={false}
                                autoPlay 
                                interval={2000}
                                style={{ height: '100%', width: '100%'}} // Set carousel container height and width to 100% to fill its parent
                            >
                                {images.map((imageUrl, index) => (
                                    <div key={index} style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img
                                            src={imageUrl}
                                            alt={`Slide ${index + 1}`}
                                            style={{ maxHeight: '100%', width: 'auto',borderRadius:"15px" }}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginLeft: "3%",borderRadius:"15px"}}>
                            <img src="https://res.cloudinary.com/dcewbqlgf/image/upload/v1690302204/project_red/Menstrual_20Info_20Final_page-0001_oclfph.jpg" />
                        </div>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Who We Are</h2>
                            <p style={{ width: "80%",marginBottom:"0" }} className="text-para-mn">Project Red is a non-profit organization that aims to empower girls and women by expanding awareness about menstrual hygiene and enabling access to sanitary products.</p>
                        <p style={{ width: "80%",marginBottom:"0" }} className="text-para-mn">We believe that breaking the period taboo and creating an open dialogue about menstrual health can have significant impact in enabling access to menstrual products. </p>
                        <p style={{ width: "80%",marginBottom:"0" }} className="text-para-mn">Our team is dedicated to providing women with the resources they need to manage their periods with dignity and confidence.</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Meet the Founder</h2>
                            <p style={{ width: "90%" }} className="text-para-mn">Hi! My name is Anshi Aggarwal, I am 17 year old and I started Project Red 3 years ago.</p>
                            <p style={{ width: "90%",margin:"0",marginBottom:"2%"}} className="text-para-mn">I grew up in Gurgaon and student in The Shri Ram School, Aravali from kindergarten till Grade 9. I now study and live in Singapore and study in Singapore American School.</p>
                            <p style={{ width: "90%",margin:"0",marginBottom:"2%"}} className="text-para-mn">I got inspired to start Project Red in 2020, when I realized that there are so many girls and women in India who don’t have access to menstrual hygiene, in rural areas right next to Gurgaon. It has been a mission and cause since then.</p>
                            <p style={{ width: "90%",margin:"0",marginBottom:"2%"}} className="text-para-mn">I love understanding how things work and have got excited about exploring engineering as way to solve difficult challenges that can help unlock progress in biology and healthcare.</p>
                            <p style={{ width: "90%",margin:"0",marginBottom:"2%"}} className="text-para-mn">I also love swimming and open water diving. When not at school and involved in my projects, I love to listen to music and enjoy with my family and friends.</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: isSmallScreen ? "" : '70%', height: '500px', overflow: 'hidden', marginRight: "3%" }}>
                            <img src={Founder} style={{ height: "500px",width:"400px",marginLeft: isSmallScreen ? "0":"8rem",borderRadius:"20px"}} className="marg-mg"/>
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