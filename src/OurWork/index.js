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
import './index.css'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


function OurWork() {
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

                <div className="image-container">
                    <div className="image-wrapper">
                        <img src="https://static.wixstatic.com/media/9c608a_84dd07f87f0848c4b78f0f134135029a~mv2_d_4272_2848_s_4_2.jpg" alt="Image 1" />
                        <div className="overlay" style={{ backgroundColor: 'rgba(24, 21, 124, 0.8)' }}>
                            <div className='text-cont' style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                                <h2 className={isSmallScreen ? 'head-text-sm-2' : 'head-text-2'}>Research</h2>
                                <p className={isSmallScreen ? 'para-text-sm-2' : 'para-text-2'}>Effectiveness of Awarness Campaigns</p>
                                <EastOutlinedIcon style={{
                                    color: 'white',
                                    fontSize: '42px',
                                    cursor: 'pointer'
                                }}
                                    onClick={() => setTab(0)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src="https://static.wixstatic.com/media/9c608a_f5de6f7f1e9a42b8a25b295d2fb2469b~mv2_d_2880_1920_s_2.jpg" alt="Image 2" />
                        <div className="overlay" style={{ backgroundColor: 'rgba(77, 130, 239, 0.8)' }}>
                            <div className='text-cont' style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                                <h2 className={isSmallScreen ? 'head-text-sm-2' : 'head-text-2'}>Pad Distributions during COVID</h2>
                                <p className={isSmallScreen ? 'para-text-sm-2' : 'para-text-2'}>6000+ Pads Distributed</p>
                                <EastOutlinedIcon style={{
                                    color: 'white',
                                    fontSize: '42px',
                                    cursor: 'pointer'
                                }}
                                    onClick={() => setTab(1)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src="https://static.wixstatic.com/media/9c608a_4045aefc9d9e4d00ae94c0718258d899~mv2_d_4544_3029_s_4_2.jpg" alt="Image 3" />
                        <div className="overlay" style={{ backgroundColor: 'rgba(172, 213, 161, 0.8)' }}>
                            <div className='text-cont' style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                                <h2 className={isSmallScreen ? 'head-text-sm-2' : 'head-text-2'}>Vending Machines</h2>
                                <p className={isSmallScreen ? 'para-text-sm-2' : 'para-text-2'}>Self Sustainability</p>
                                <EastOutlinedIcon style={{
                                    color: 'white',
                                    fontSize: '42px',
                                    cursor: 'pointer'
                                }}
                                    onClick={() => setTab(2)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src="https://static.wixstatic.com/media/9c608a_86e9bc49a0634156b4c80e5a00e2225c~mv2_d_3000_2000_s_2.jpg" alt="Image 4" />
                        <div className="overlay" style={{ backgroundColor: 'rgba(234, 222, 113, 0.8)' }}>
                            <div className='text-cont' style={{ marginTop: '3rem', marginLeft: '2rem' }}>
                                <h2 className={isSmallScreen ? 'head-text-sm-2' : 'head-text-2'}>Vending Machines Installation</h2>
                                <p className={isSmallScreen ? 'para-text-sm-2' : 'para-text-2'}>3 Machines Installed</p>
                                <EastOutlinedIcon style={{
                                    color: 'white',
                                    fontSize: '42px',
                                    cursor: 'pointer'
                                }}
                                    onClick={() => setTab(3)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay-content">
                    <div className="glob-centre-2" style={{ marginBottom: "2%" }}>
                        <h2 className="text-row-mn-2" style={{ margin: "0px", marginBottom: "1%" }}>Project Red has made a difference to the lives of more than 6000 girls through its multiple initiatives.</h2>
                    </div>
                    {tab === 0 ?<div class="container" style={{ marginTop: '3%' }}>
                        <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                            <h2 style={{ marginTop: '0px', marginBottom: "15px" }} className="text-row-mn">Research</h2>
                            <p style={{ width: "70%" }} className="text-para-mn">A research paper evaluating the effectiveness of the awareness campaigns has been published in Global Journals. To know more: Menstruation is a phenomenon unique to girls. However, it has always been surrounded by taboos that lead to the exclusion of women from many spheres of life. In rural India, the topic is still taboo. One of the biggest challenges that women face is not being educated and not having the resources to get sanitary pads. The present research study aims to evaluate the effectiveness of a self-formulated campaign called “Spot On & Off” to raise awareness about menstrual hygiene among females belonging to three different age groups 8-15, 16-35, 36-60, with most of the girls from the age group 16-35. They live in the rural area of Mewat in Haryana, India. A survey was conducted with 300 female respondents. Post the survey, an awareness workshop was carried out, where videos of gynaecologists explaining what menstruation is, was shown. A post-survey was conducted to assess the effectiveness of the campaign. The respondents’ awareness showed a significant increase from 2.19 to 5.54 out of 10 on average. The study also found out that awareness had a 19% impact on the liking of reusable pads.</p>
                        </div>
                        <div className="carousel-container" style={{ flex: '1', maxWidth: '50%', height: '100%', overflow: 'hidden', marginLeft: "3%",borderRadius:"15px" }}>
                            <img src="https://static.wixstatic.com/media/e0c28e_d118f89d1f344afc98ad1b7ecd5195db~mv2.png" />
                        </div>
                    </div>:""}
                    {/* <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                        <h2 style={{ marginTop: '0px', marginBottom: "35px" }} className="text-row-mn">Awareness Campaigns + Pad Distribution:</h2>
                        {tab === 0 ?<div>
                            <h2 style={{ marginTop: '0px', marginBottom: "0px" }} className="text-row-mn">Research:</h2>
                            <p style={{ width: "80%" }} className="text-para-mn">A research paper evaluating the effectiveness of the awareness campaigns has been published in Global Journals. To know more: Menstruation is a phenomenon unique to girls. However, it has always been surrounded by taboos that lead to the exclusion of women from many spheres of life. In rural India, the topic is still taboo. One of the biggest challenges that women face is not being educated and not having the resources to get sanitary pads. The present research study aims to evaluate the effectiveness of a self-formulated campaign called “Spot On & Off” to raise awareness about menstrual hygiene among females belonging to three different age groups 8-15, 16-35, 36-60, with most of the girls from the age group 16-35. They live in the rural area of Mewat in Haryana, India. A survey was conducted with 300 female respondents. Post the survey, an awareness workshop was carried out, where videos of gynaecologists explaining what menstruation is, was shown. A post-survey was conducted to assess the effectiveness of the campaign. The respondents’ awareness showed a significant increase from 2.19 to 5.54 out of 10 on average. The study also found out that awareness had a 19% impact on the liking of reusable pads.</p>
                        </div>:""}
                    </div> */}
                    {tab === 1 ? <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                        <h2 style={{ marginTop: '0px', marginBottom: "0px" }} className="text-row-mn">Pad Distributions during COVID:</h2>
                        <p style={{ width: "80%" }} className="text-para-mn">During the second wave of COVID-19 in India, it was extremely difficult to conduct on ground awareness workshops and pad distributions, so I partnered up with several organizations and sent reusable pads and conducted online awareness workshops. With the help of 10 organizations, we were able to make a difference to 2400 girls' lives. 600 pads were distributed to a women's handicraft enterprise in Rajasthan (Sadhna), 500 pads to Uday Foundation, 200 pads to a women's self-defense organization (Tinka Samajik Sanstha), 100 pads to Kota Women Weaves, 100 pads to Dwarka Plus, 100 pads to Sujani Mahila Jeevan foundation, 400 pads to Disha Shekhawati, 100 pads to a transgender community (Mitr Trust) and 500 pads to Blind Relief Association.</p>
                    </div>:""}
                    {/* <div style={{ borderTop: '2px solid white', width: '100%' }}></div> */}
                    {tab === 2 ? <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                        <h2 style={{ marginTop: '0px', marginBottom: "0px" }} className="text-row-mn">Vending Machines:</h2>
                        <p style={{ width: "80%" }} className="text-para-mn">The awareness workshops and pad distribution drives organized by individuals and NGOs certainly help improve the condition of menstrual hygiene management in India, they are not the solution. Once the pads that are distributed get over, the girls are back to square one with no one to turn to and nowhere to procure pads from. In this context, pad vending machines can play a crucial role by providing convenient and accessible access to sanitary pads, promoting menstrual hygiene, and empowering women to manage their periods safely and with dignity. This is where Project Red comes in. Project Red aims to create an environment of independence and self sustainability through installing pad vending machines in the most remote areas of India. These machines are continuously refilled ensuring that the girls have a steady, low cost source of pads forever.</p>
                        <p style={{ width: "80%" }} className="text-para-mn">The machine can be installed in a community center, a girls bathroom or wherever is convenient. The value of each pad can be changed depending on the area, with some being free or some being 2-3 rupees per pad. Any pads can fit in, regular, disposable, reusable, of any size, as long as they are trifold pads. Another important feature of these vending machines is the SMS module. The vending machine contains a sensor that sends a message to the SMS module when less than 5 pads (this number can be changed) are left. The SMS module then sends a text message to whoever’s number is connected and they get a notification saying that the pads need to be refilled. This ensures that the machines never lay empty and there is a constant supply of pads for the girls. This feature is also the main differentiating feature as no other pad vending machines that have been deployed in India possess this feature. Lastly, there is a battery back up in the machines. In case there is no power, the machines can run for up to 2-3 days. This is essential as often there are electricity cuts and shortages in rural India, but that should not stop girls from adopting clean menstrual hygiene practices.</p>
                    </div>: ""}
                    {/* <div style={{ borderTop: '2px solid white', width: '100%' }}></div> */}
                    {tab === 3 ? <div class="content glob-centre-3" style={{ marginLeft: "8%" }}>
                        <h2 style={{ marginTop: '0px', marginBottom: "0px" }} className="text-row-mn">Vending Machines Installation:</h2>
                        <p style={{ width: "80%" }} className="text-para-mn">3 vending machines have already been installed with the help of Taarini Foundation. One of them has been installed in Pandit Deen Dayal Upadhyaya Ashram Paddati Balika Vidyalya in Uttar Pradesh. It is a state run, all girls boarding school. The total strength is 480 girls. The second one has been installed in the District Jail of the Saharanpur District. The women's barrack has a total strength of 51 inmates. The third one has been installed in the All India Women’s Conference (AIWC). The rehabilitation and vocational training home has a total strength of 62 women on a rotational basis. 10 more machines are currently in the process of being installed.</p>
                    </div>:""}
                    <div style={{ borderTop: '2px solid white', width: '100%' }}></div>
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

export default OurWork;