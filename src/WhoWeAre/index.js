import React from "react";
import Navbar from "../NavBar";
import Founder from '../founder.jpg'
import Footer from "../Footer";
import { useMediaQuery } from '@mui/material';
import { useEffect } from "react";

function WhoWeAre() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)');

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="overlay-container">
                <div className="background-image"></div>
                <Navbar />
                <div className="overlay-content">
                <div class="container" style={{ marginTop: '2%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                        <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Who We Are</h2>
                        <p style={{ width: "80%",marginBottom:"6%" }} className="text-para-mn">Project Red is a registered non-profit organization that aims to empower women by expanding awareness about menstrual hygiene and enabling access to sanitary products. We believe in breaking the period taboo and creating an open dialogue about menstrual health. Our team is dedicated to providing women with the resources they need to manage their periods with dignity and confidence.</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginLeft: "3%"}}>
                            <img src="https://res.cloudinary.com/dask68vcu/image/upload/v1690309467/WhatsApp_Image_2020-12-03_at_4.22.24_PM_2_wjmmjs.jpg" style={{borderRadius:"15px"}}/>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '2%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">What The Story of Project Red</h2>
                            <p style={{ width: "80%" }} className="text-para-mn">In early 2020, I came across an article saying that less than 20% of women and girls in India use hygienic sanitary pads. This led me to research more and I discovered that millions of young girls in rural India are confused, scared and embarrassed when their first menstrual cycle takes place. Their mothers and aunts are unable to support them due to their own lack of awareness about this subject. Further, problems of affordability and accessibility make it difficult for these girls to use hygienic pads. Their confidence in middle school years nose-dives and many drop out of school. In some cases, they suffer severe infections due to the lack of hygiene. Menstruation continues to a taboo topic and girls and women continue to live with shame for what is a very natural process of their lives.</p>
                            <p style={{ width: "80%" }} className="text-para-mn">Through Project Red, I hope to create awareness, break taboos and empower women to embrace menstruation and menopause as something very normal in their life. In December 2020, I visited 2 villages in Mewat (one of the most backward areas in India). I interacted with girls and women to understand their problems. I showed them educational videos in which gynaecologists' spoke about menstruation, issues related to hygiene and health and emphasized the importance of wearing a pad. I distributed over 400 packets of reusable hygienic sanitary pads that would last a year. The surveys I conducted before and after the awareness campaign showed that average understanding of menstruation increased from 2.19 to 5.54 out of 10. There was a very high acceptance of re-usable pads - 91% of girls reported using reusable pads and average liking of reusable pads - 3.51 out of 5.</p>
                            <p style={{ width: "80%" }} className="text-para-mn">When the second wave of COVID19 hit, families barely had enough money to buy food and keep the house running, so buying pads was out of the question. To help women in these times, I donated over 2000 reusable pads to different parts of India that needed help. I helped women craft villages across India as well as organisations like Blind Relief Foundation, Uday Foundation, Mitr Trust.</p>
                            <p style={{ width: "80%" }} className="text-para-mn">I wanted to find a more sustainble solution in which the women could be independent and not rely on pads from other people, so I innovated a pad vending machine. The machine can be free of charge or accept a 1 rupee coin, can run with electricty or with a battery and has an SMS module that sends a message whenever the pads are over. With the help of Taarini Foundation, I was able to install these machines in a boarding school, a women's jail and a vocational training center, together helping over 600 women.</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginLeft: "3%"}}>
                            <img src="https://res.cloudinary.com/dcewbqlgf/image/upload/v1690302204/project_red/Menstrual_20Info_20Final_page-0001_oclfph.jpg" style={{borderRadius:"15px"}}/>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Meet the Founder</h2>
                            <p style={{ width: "90%" }} className="text-para-mn">Hi! My name is Anshi Aggarwal and I am a 17-year-old girl living in Singapore and studying in Singapore American School. Before moving to Singapore, I lived in Gurgaon, India, for 15 years and studied in The Shri Ram School Aravali.</p>
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

export default WhoWeAre;