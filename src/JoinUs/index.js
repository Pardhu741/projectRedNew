import React from "react";
import './index.css';
import Navbar from "../NavBar";
import { useMediaQuery } from '@mui/material';
import Footer from "../Footer";
import { useEffect } from "react";

function JoinUs() {

    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const data = {
            name: formData.get('name'),
            age: formData.get('age'),
            sex: formData.get('sex'),
            location: formData.get('location'),
            email: formData.get('email'),
            phoneNumber: formData.get('phoneNumber'),
            reasonToJoin: formData.get('reasonToJoin'),
            howToHelp: formData.get('howToHelp'),
        };
        // uploadToSpreadsheet(data, form)
        // addRowToSpreadsheet(data);
        dataUpload(data)
        console.log(data, 'form data')
        form.reset();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    async function dataUpload(data) {
        console.log(JSON.stringify(data),'stringfied')
        fetch('https://sheetdb.io/api/v1/euxlm7u9ie7yp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'NAME': data.name,
                        'AGE': data.age,
                        'SEX': data.sex,
                        'LOCATION': data.location,
                        'EMAIL': data.email,
                        'MOBILE_NUMBER': data.phoneNumber,
                        'REASON': data.reasonToJoin,
                        'HELP': data.howToHelp,
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => {
                alert("RESPONSE SUBMITTED SUCCESSFULLY!!")
                console.log(data)
            });
    }

    return (
        <>
            <div className="overlay-container">
                <div className="background-image"></div>
                <Navbar />
                <div className="overlay-content">
                    <div className="glob-centre-2" style={{ marginBottom: "2%" }}>
                        <h2 className="text-row-mn-2" style={{ margin: "0px", marginBottom: "1%" }}>CONTACT US</h2>
                    </div>
                    <div className="form-container" onSubmit={handleSubmit}>
                        <form>
                            <div class="form-group">
                                <label class="form-label" for="name">Name</label>
                                <input class="form-input" type="text" id="name" name="name" autoComplete="off"/>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="age">Age</label>
                                <input class="form-input" type="number" id="age" name="age" autoComplete="off"/>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="sex">Sex</label>
                                <input class="form-input" type="text" id="sex" name="sex" autoComplete="off"/>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="location">Location</label>
                                <input class="form-input" type="text" id="location" name="location" autoComplete="off"/>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="email">Email Id</label>
                                <input class="form-input" type="email" id="email" name="email" autoComplete="off" required/>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="phone">Phone Number</label>
                                <input class="form-input" type="tel" id="phoneNumber" name="phoneNumber" autoComplete="off"/>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="reason">Reason To Join</label>
                                <textarea class="form-input-2" type="text" id="reasonToJoin" name="reasonToJoin" autoComplete="off"/>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="help">How You Can Help</label>
                                <textarea class="form-input-2" type="text" id="howToHelp" name="howToHelp" autoComplete="off"/>
                            </div>

                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '2rem' }} className={isSmallScreen ? 'glob-start' : 'glob-centre'}>
                <Footer />
            </div>
        </>
    )
}

export default JoinUs