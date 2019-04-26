import React, { Component } from 'react'

class About extends Component {
    render() {
        return (


            <div>

                <h1> Meet Sawa Team</h1>
                <div class="container">

                    <div class="holder" style={{
                        backgroundImage: "url(" + "photos/fahd.jpg" + ")",
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
                        backgroundImage: "url(" + "photos/nizar.png" + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>

                    </div>
                    <div class="holder" style={{
                        backgroundImage: "url(" + "photos/daniel.jpg" + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>

                    </div>
                </div>
                <div class="container">

                    <div class="textImg">Fahd</div>
                    <div class="textImg">Fabrizio</div>
                    <div class="textImg">Nizar</div>
                    <div class="textImg" >Daniel</div>

                </div>

            </div>
        )
    }
}

export default About;