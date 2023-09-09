import React from "react";
import Navbar from "../NavBar";
import Founder from '../founder.jpg'
import Footer from "../Footer";
import { useMediaQuery } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect } from "react";

function WhoWeAre() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function openLinks(path) {
        window.open(path, "_blank")
    }

    return (
        <>
            <div className="overlay-container">
                <div className="background-image"></div>
                <Navbar />
                <div className="overlay-content">
                    <div class="container" style={{ marginTop: '2%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">What is the story of Project Red</h2>
                            <p style={{ width: "80%" }} className="text-para-mn">In early 2020, I came across an article saying that less than 20% of women and girls in India use hygienic sanitary pads. This led me to research more and I discovered that millions of young girls in rural India are confused, scared and embarrassed when their first menstrual cycle takes place. Their mothers and aunts are unable to support them due to their own lack of awareness about this subject. Further, problems of affordability and accessibility make it difficult for these girls to use hygienic pads. Their confidence in middle school years nose-dives and many drop out of school. In some cases, they suffer severe infections due to the lack of hygiene. Menstruation continues to a taboo topic and girls and women continue to live with shame for what is a very natural process of their lives.</p>
                            <p style={{ width: "80%" }} className="text-para-mn">Through Project Red, I hope to create awareness, break taboos and empower women to embrace menstruation and menopause as something very normal in their life. In December 2020, I visited 2 villages in Mewat (one of the most backward areas in India). I interacted with girls and women to understand their problems. I showed them educational videos in which gynaecologists' spoke about menstruation, issues related to hygiene and health and emphasized the importance of wearing a pad. I distributed over 400 packets of reusable hygienic sanitary pads that would last a year. The surveys I conducted before and after the awareness campaign showed that average understanding of menstruation increased from 2.19 to 5.54 out of 10. There was a very high acceptance of re-usable pads - 91% of girls reported using reusable pads and average liking of reusable pads - 3.51 out of 5.</p>
                            <p style={{ width: "80%" }} className="text-para-mn">When the second wave of COVID19 hit, families barely had enough money to buy food and keep the house running, so buying pads was out of the question. To help women in these times, I donated over 2000 reusable pads to different parts of India that needed help. I helped women craft villages across India as well as organisations like Blind Relief Foundation, Uday Foundation, Mitr Trust.</p>
                            <p style={{ width: "80%" }} className="text-para-mn">I wanted to find a more sustainble solution in which the women could be independent and not rely on pads from other people, so I innovated a pad vending machine. The machine can be free of charge or accept a 1 rupee coin, can run with electricty or with a battery and has an SMS module that sends a message whenever the pads are over. With the help of Taarini Foundation, I was able to install these machines in a boarding school, a women's jail and a vocational training center, together helping over 600 women.</p>
                        </div>
                        <div style={{ flex: '1', maxWidth: '50%', maxHeight: '100%', overflow: 'hidden', marginLeft: "3%" }}>
                            <img src="https://res.cloudinary.com/dask68vcu/image/upload/v1694245551/vdsixdhnw23tkraqzocc.jpg" style={{ borderRadius: "15px", marginBottom: "2%" }} />
                            <img src="https://res.cloudinary.com/dask68vcu/image/upload/v1694245646/xvwi6tehbizhzjmsjbch.jpg" style={{ borderRadius: "15px", marginBottom: "2%" }} />
                            <img src="https://res.cloudinary.com/dask68vcu/image/upload/v1694245680/z2ebgte4rpaotps2hhhy.jpg" style={{ borderRadius: "15px" }} />
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%', marginTop: "3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginLeft: "3%", borderRadius: "15px" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png" />
                        </div>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Project Red Impact</h2>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                                <CircleIcon sx={{ fontSize: "14px", color: "white", marginRight: "15px" }} />
                                <p style={{ width: "100%", margin: "0px" }} className="text-para-mn">Lives impacted : <span style={{ color: "pink" }}>5000 girls and women in Mewat, Haryana and Saharanpur, Uttar Pradesh</span></p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                                <CircleIcon sx={{ fontSize: "14px", color: "white", marginRight: "15px" }} />
                                <p style={{ width: "100%", margin: "0px" }} className="text-para-mn">Sanitary Napkins Distributed - <span style={{ color: "pink" }}>6000 packets consisting of 2 reusable pads or 10 disposable sanitary napkins </span></p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                                <CircleIcon sx={{ fontSize: "14px", color: "white", marginRight: "15px" }} />
                                <p style={{ width: "100%", margin: "0px" }} className="text-para-mn">Vending Machines Installed - <span style={{ color: "pink" }}>20 machines in girls schools, community centers, Women’s barrack in District Jails</span></p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "flex-start" }}>
                                <CircleIcon sx={{ fontSize: "14px", color: "white", marginRight: "15px", marginTop: "10px" }} />
                                <p style={{ width: "100%", margin: "0px" }} className="text-para-mn">Fundraising - <span style={{ color: "pink" }}>INR 3,00,000 through 3 rounds of fund-raisers</span></p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                                <CircleIcon sx={{ fontSize: "14px", color: "white", marginRight: "15px" }} />
                                <p style={{ width: "100%", margin: "0px" }} className="text-para-mn">Areas where we work :</p>
                            </div>
                            <p style={{ width: "80%", margin: "0px", marginLeft: "8%", color: "pink" }} className="text-para-mn"> - Impacted lives of 600 women in Mewat, Haryana in partnership with ShriRam Foundation</p>
                            <p style={{ width: "80%", margin: "0px", marginLeft: "8%", color: "pink" }} className="text-para-mn"> - Impacted lives of 2000 women in Saharanpur, Uttar Pradesh</p>
                            <p style={{ width: "80%", margin: "0px", marginLeft: "8%", color: "pink" }} className="text-para-mn"> - Impacted lives of 2000 women in West Bengal</p>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                                <CircleIcon sx={{ fontSize: "14px", color: "white", marginRight: "15px" }} />
                                <p style={{ width: "100%", margin: "0px" }} className="text-para-mn">Newspaper and media coverage - <span style={{ color: "pink" }}>Local newspapers, CNN-TV 18, Socio Story</span></p>
                            </div>
                        </div>

                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%', marginTop: "3%" }}></div>
                    <div class="container" style={{ marginTop: '3%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Campaigns</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">Project Red has done 4 major campaigns, from 2020-2023 </p>
                            <p style={{ width: "70%" }} className="text-para-mn">2020 – Awareness campaigns and pad distribution drives in X - Rewasan and U - Kherla village in Mewat, Haryana. Also developed and distributed a handbook that contained all the relevant knowledge about menstruation.</p>
                            <p style={{ width: "70%", color: "pink" }} className="text-para-mn">First fundraiser – INR 75,000</p>
                            <p style={{ width: "70%", margin: "0", marginBottom: "3%" }} className="text-para-mn">Pre-campaign and post-campaign survey conducted (with 600 sample size) indicating increase in awareness by Y - 153% and Z - 91% satisfaction with re-usable pads</p>
                            <p style={{ width: "70%", margin: "0", marginBottom: "3%" }} className="text-para-mn">2021 – Pad distribution drives to impacted areas during COVID in partnership with The ShriRam Foundation</p>
                            <p style={{ width: "70%", margin: "0" }} className="text-para-mn">2022 – Innovated on the idea of installing vending machines to create sustainability – developed a prototype with SMS module to ensure pads are refilled on time. </p>
                            <p style={{ width: "70%", color: "pink" }} className="text-para-mn">Second fundraiser: INR 50,000</p>
                            <p style={{ width: "70%", margin: "0", marginBottom: "3%" }} className="text-para-mn">Installed 3 machines in Delhi and Saharanpur, Uttar Pradesh in partnership with Taarini Foundation</p>
                            <p style={{ width: "70%", margin: "0" }} className="text-para-mn">2022 – Further innovated on vending machine design to ensure it works in areas with low electricity supply. Installed 5 more machines in girls school and Women’s baracks in District Jail in Saharanpur, Uttar Pradesh in partnership with Taarini Foundation</p>
                            <p style={{ width: "70%", color: "pink" }} className="text-para-mn">Third fundraiser: INR 150,000</p>
                            <p style={{ width: "70%", margin: "0" }} className="text-para-mn">2023 – Installed 10 more machines in Saharanpur, Uttar Pradesh in partnership with Taarini Foundation. Installed 10 machines in West Bengal in girls school in Partnership with C3India, Center of Catalysing Change.</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginRight: "3%" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_3bbc16b429c6469bbb6c00b50b34721d~mv2.jpeg" style={{ height: "500px", borderRadius: "15px" }} />
                        </div>
                    </div>
                    <div style={{ borderTop: '2px solid white', width: '100%', marginTop: "3%" }}></div>
                    <div class="container" style={{ marginTop: '6%', marginBottom: "6%" }}>
                        <div className="container2 glob-mar-tp glob-marg-rig">
                            <div className="image2">
                                <img src='https://static.wixstatic.com/media/e0c28e_6bdcedd095994ab198750eae0d2d1116~mv2.jpg/v1/fill/w_301,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20shots%20of%20digital%20news%20(5).jpg' alt="img1" style={{ borderRadius: "15px" }} />
                                <button className="button" onClick={() => openLinks('https://www.youtube.com/watch?v=wi_pC7jFTwU&list=PL3HhMTCWB-e82K4AKaYJVFCzhbbqMT3rV&index=13')}>Video With CNN News 18</button>
                            </div>
                            <div className="image2">

                                <img src='https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png/v1/fill/w_301,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-01-27%20at%207_09_16%20PM.png' alt="img2" style={{ borderRadius: "15px" }} />
                                <button className="button" onClick={() => openLinks('https://sociostory.org/impact-stories/meet-the-duo-who-are-on-a-mission-to-educate-the-rural-girls-and-women-on-a-taboo-topic-menstrual-health')}>Socio Story Article</button>
                            </div>
                            <div className="image2">
                                <img src='https://static.wixstatic.com/media/e0c28e_1caa129ac69448b9be38bac0286ad1bf~mv2.jpeg/v1/fill/w_301,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-01-27%20at%207_42_44%20PM.jpeg' alt="img3" style={{ borderRadius: "15px" }} />
                                <button className="button" onClick={() => openLinks('https://www.youtube.com/watch?v=wi_pC7jFTwU&list=PL3HhMTCWB-e82K4AKaYJVFCzhbbqMT3rV&index=13')}>Local News</button>
                            </div>
                        </div>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">In the News</h2>
                            <p style={{ width: "80%" }} className="text-para-mn">We work hard to get our efforts noticed by the media and are so proud when this goal comes to fruition. Take a look at some of our latest coverage and help spread the word about all the amazing developments at Project Red.</p>
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