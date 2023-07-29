import React from "react";
import './index.css'
import Navbar from "../NavBar";
import Footer from "../Footer";
import { useEffect } from "react";
import { useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import CircleIcon from '@mui/icons-material/Circle';
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
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Project Red Impact</h2>
                            {/* <p style={{ width: "70%" }} className="text-para-mn">TProject Red aims to empower women to shed the “period taboo” by expanding awareness about menstrual hygiene and enabling access to sanitary products.</p> */}
                            <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
                            <CircleIcon sx={{fontSize:"14px",color:"white",marginRight:"15px"}}/>
                            <p style={{ width: "100%",margin:"0px"}} className="text-para-mn">Lives impacted : <span style={{color:"pink"}}>5000 girls and women in Mewat, Haryana and Saharanpur, Uttar Pradesh</span></p>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
                            <CircleIcon sx={{fontSize:"14px",color:"white",marginRight:"15px"}}/>
                            <p style={{ width: "100%",margin:"0px"}} className="text-para-mn">Sanitary Napkins Distributed - <span style={{color:"pink"}}>6000 packets consisting of 2 reusable pads or 10 disposable sanitary napkins </span></p>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
                            <CircleIcon sx={{fontSize:"14px",color:"white",marginRight:"15px"}}/>
                            <p style={{ width: "100%",margin:"0px"}} className="text-para-mn">Vending Machines Installed - <span style={{color:"pink"}}>20 machines in girls schools, community centers, Women’s barrack in District Jails</span></p>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:'flex-start',alignItems:"flex-start"}}>
                            <CircleIcon sx={{fontSize:"14px",color:"white",marginRight:"15px",marginTop:"10px"}}/>
                            <p style={{ width: "100%",margin:"0px"}} className="text-para-mn">Fundraising - <span style={{color:"pink"}}>INR 3,00,000 through 3 rounds of fund-raisers</span></p>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
                            <CircleIcon sx={{fontSize:"14px",color:"white",marginRight:"15px"}}/>
                            <p style={{ width: "100%",margin:"0px"}} className="text-para-mn">Areas where we work :</p>
                            </div>
                            <p style={{ width: "80%",margin:"0px",marginLeft:"8%",color:"pink"}} className="text-para-mn"> - Impacted lives of 600 women in Mewat, Haryana in partnership with ShriRam Foundation</p>
                            <p style={{ width: "80%",margin:"0px",marginLeft:"8%",color:"pink"}} className="text-para-mn"> - Impacted lives of 2000 women in Saharanpur, Uttar Pradesh</p>
                            <p style={{ width: "80%",margin:"0px",marginLeft:"8%",color:"pink"}} className="text-para-mn"> - Impacted lives of 2000 women in West Bengal</p>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
                            <CircleIcon sx={{fontSize:"14px",color:"white",marginRight:"15px"}}/>
                            <p style={{ width: "100%",margin:"0px"}} className="text-para-mn">Newspaper and media coverage - <span style={{color:"pink"}}>Local newspapers, CNN-TV 18, Socio Story</span></p>
                            </div>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginLeft: "3%",borderRadius:"15px" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png" />
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                    <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginRight: "3%" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_3bbc16b429c6469bbb6c00b50b34721d~mv2.jpeg" style={{ height: "500px",borderRadius:"15px" }} />
                        </div>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Campaigns</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">Project Red has done 4 major campaigns, from 2020-2023 </p>
                            <p style={{ width: "70%" }} className="text-para-mn">2020 – Awareness campaigns and pad distribution drives in X and U village in Mewat, Haryana. Also developed and distributed a handbook that contained all the relevant knowledge about menstruation.</p>
                            <p style={{ width: "70%",color:"pink"}} className="text-para-mn">First fundraiser – INR 75,000</p>
                            <p style={{ width: "70%",margin:"0",marginBottom:"3%"}} className="text-para-mn">Pre-campaign and post-campaign survey conducted (with 600 sample size) indicating increase in awareness by Y% and Z% satisfaction with re-usable pads</p>
                            <p style={{ width: "70%",margin:"0",marginBottom:"3%"}} className="text-para-mn">2021 – Pad distribution drives to impacted areas during COVID in partnership with The ShriRam Foundation</p>
                            <p style={{ width: "70%",margin:"0"}} className="text-para-mn">2022 – Innovated on the idea of installing vending machines to create sustainability – developed a prototype with SMS module to ensure pads are refilled on time. </p>
                            <p style={{ width: "70%",color:"pink"}} className="text-para-mn">Second fundraiser: INR 50,000</p>
                            <p style={{ width: "70%",margin:"0",marginBottom:"3%"}} className="text-para-mn">Installed 3 machines in Delhi and Saharanpur, Uttar Pradesh in partnership with Taarini Foundation</p>
                            <p style={{ width: "70%",margin:"0"}} className="text-para-mn">2022 – Further innovated on vending machine design to ensure it works in areas with low electricity supply. Installed 5 more machines in girls school and Women’s baracks in District Jail in Saharanpur, Uttar Pradesh in partnership with Taarini Foundation</p>
                            <p style={{ width: "70%",color:"pink"}} className="text-para-mn">Third fundraiser: INR 150,000</p>
                            <p style={{ width: "70%",margin:"0"}} className="text-para-mn">2023 – Installed 10 more machines in Saharanpur, Uttar Pradesh in partnership with Taarini Foundation. Installed 10 machines in West Bengal in girls school in Partnership with C3India, Center of Catalysing Change.</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Research</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">I wrote a research paper on my findings from the surveys I conducted pre and post the awareness campaigns. To know more and read the research paper, go to Our Work tab!</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginLeft: "3%",borderRadius:"15px" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_d118f89d1f344afc98ad1b7ecd5195db~mv2.png" />
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"3%" }}></div>
                    <div class="container" style={{ marginTop: '6%', marginBottom: "6%" }}>
                        <div className="container2 glob-mar-tp glob-marg-rig">
                            <div className="image2">
                                {/* <img src="https://static.wixstatic.com/media/e0c28e_1caa129ac69448b9be38bac0286ad1bf~mv2.jpeg" alt="Image 1" /> */}
                                <img src='https://static.wixstatic.com/media/e0c28e_6bdcedd095994ab198750eae0d2d1116~mv2.jpg/v1/fill/w_301,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20shots%20of%20digital%20news%20(5).jpg' alt="img1" style={{borderRadius:"15px"}}/>
                                <button className="button" onClick={() => openLinks('https://www.youtube.com/watch?v=wi_pC7jFTwU&list=PL3HhMTCWB-e82K4AKaYJVFCzhbbqMT3rV&index=13')}>Video With CNN News 18</button>
                            </div>
                            <div className="image2">
                                {/* <img src="https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png" alt="Image 2" /> */}
                                <img src='https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png/v1/fill/w_301,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-01-27%20at%207_09_16%20PM.png' alt="img2" style={{borderRadius:"15px"}}/>
                                <button className="button" onClick={() => openLinks('https://sociostory.org/impact-stories/meet-the-duo-who-are-on-a-mission-to-educate-the-rural-girls-and-women-on-a-taboo-topic-menstrual-health')}>Socio Story Article</button>
                            </div>
                            <div className="image2">
                                {/* <img src="https://static.wixstatic.com/media/e0c28e_6bdcedd095994ab198750eae0d2d1116~mv2.jpg" alt="Image 3" /> */}
                                <img src='https://static.wixstatic.com/media/e0c28e_1caa129ac69448b9be38bac0286ad1bf~mv2.jpeg/v1/fill/w_301,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-01-27%20at%207_42_44%20PM.jpeg' alt="img3" style={{borderRadius:"15px"}}/>
                                <button className="button" onClick={() => openLinks('https://www.youtube.com/watch?v=wi_pC7jFTwU&list=PL3HhMTCWB-e82K4AKaYJVFCzhbbqMT3rV&index=13')}>Local News</button>
                            </div>
                        </div>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">In the News</h2>
                            <p style={{ width: "80%" }} className="text-para-mn">We work hard to get our efforts noticed by the media and are so proud when this goal comes to fruition.Take a look at some of our latest coverage and help spread the word about all the amazing developments at Project Red.</p>
                        </div>
                    </div>
                    {/* <div style={{ borderTop: '2px solid white', width: '100%',marginTop:"1%",marginBottom:"2%" }}></div>
                    <div className="glob-centre-2" style={{marginBottom:"2%"}}>
                        <h2 className="text-row-mn" style={{margin:"0px",marginBottom:"1%"}}>Donate</h2>
                        <p className="text-para-mn" style={{margin:"0px"}}>Every donation makes a difference, support Project Red by donating!</p>
                        <div class="button-container">
                            <button className="button" style={{ width: 'fit-content', marginRight: '5rem', paddingLeft: '15px', paddingRight: '15px', backgroundColor: '#55b553' }}>India Fund Raiser</button>
                            <button className="button" style={{ width: 'fit-content', paddingLeft: '15px', paddingRight: '15px', backgroundColor: '#55b553' }}>Singpore Fund Raiser</button>
                        </div>
                    </div> */}
                </div>
            </div>
            <div style={{ marginTop: '2rem' }} className={isSmallScreen ? 'glob-start' : 'glob-centre'}>
                <Footer />
            </div>
        </>
    )
}

export default WhatWeDo;