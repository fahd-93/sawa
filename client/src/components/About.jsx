import React, { Component } from 'react'
import { Image } from 'react-bootstrap';

class About extends Component {
    render() {
        return (


            <div>

                <div className="header-wrapper" align="middle">

                    <Image src="photos/hands.png" className="header-image" />
                    <h1 className="header-title">Our Mission</h1>

                    <p>At Sawa we are driven by a single purpose which stands for bringing the Syrian community<br />
                        together to rise again after a massive war which didn’t leave anything behind but distruction </p>
                    <div className="title-border"></div>
                    <h2>Activities</h2>

                </div>
                <div className="section1">
                    <h2 className="first-section-title">Volunteer opportunities</h2>
                    <Image src="photos/men.jpg" className="section1-image" />
                    <p className="section1-content" >With our platform mission always in mind, we strive to find new startegies for dealing<br /> with this challenge.
                        <br />volunteer opportunities is something that we take very seriously </p>

                </div>


                <div className="section2">
                    <h2 className="second-section-title">Help Rebuilding The community</h2>
                    <Image src="photos/workers.jpg" className="section2-image" />
                    <p className="section2-content" >Furthering our cause is the most important goal of our platform.
                     We seek to bring people who wants to help others to restore basic rights of living.<br />
                        Our success isn’t measured in terms of any wealth or profit, but by the value we provide to those we serve
                    </p>


                </div>
                <div className="border2"></div>

                <h3 className="quote">“ Grate things are done by a series of small things  brought together” </h3>
                <br />
                <h2 className="title"> Meet Sawa Team</h2>
                <br />

                <div class="container">
                    <div class="holder" style={{
                        backgroundImage: "url(" + "photos/daniel.jpg" + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>

                    </div>
                    <div class="holder" style={{
                        backgroundImage: "url(" + "photos/fabrizio.jpg" + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>
                    </div>
                    <div class="holder" style={{
                        backgroundImage: "url(" + "photos/fahd.jpg" + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>

                    </div>
                    <div class="holder" style={{
                        backgroundImage: "url(" + "photos/nizar.png" + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>

                    </div>

                </div>
                <div class="container">


                    <div class="textImg" >Daniel</div>
                    <div class="textImg">Fabrizio</div>
                    <div class="textImg">Fahd</div>
                    <div class="textImg">Nizar</div>

                </div>
                <br />


            </div>
        )
    }
}

export default About;
