import React, { Component } from 'react'
import { Container, Col, Image, Row, Card, CardGroup } from 'react-bootstrap';


class About extends Component {
    render() {
        return (
            <div>

                <h1> Sawa Team </h1>


                {/* <Row className="show-grid text-center" >

                        <Col className="person-wrapper">
                            <Image style={{
                                backgroundImage: "url(" + "photos/fahd.jpg" + ")",
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }} className="imageRound" />
                            <h3>Daniel</h3>


                        </Col>
                    </Row>
                    <Row className="show-grid text-center">
                        <Col className="person-wrapper">
                            <Image style={{
                                backgroundImage: "url(" + "photos/daniel.jpg" + ")",
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }} className="imageRound" />
                            <h3>Daniel</h3>
                        </Col>
                    </Row>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image style={{
                                backgroundImage: "url(" + "photos/nizar.png" + ")",
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }} className="imageRound" />
                            <h3>Daniel</h3>


                        </Col>
                    </Row>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image style={{
                                backgroundImage: "url(" + "photos/fabrizio.jpg" + ")",
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }} className="imageRound" />
                            <h3>Daniel</h3>


                        </Col>

                    <Col xs={6} md={4} className="person-wrapper">
                        <Image src="photos/nizar.png" roundedCircle />
                        <h3>Nizar</h3>


                    </Col>
                    <Col xs={6} md={4} className="person-wrapper">
                        <Image src="photos/daniel.jpg" roundedCircle />
                        <h3>Daniel</h3>


                    </Col>

                    <Col xs={6} md={4} className="person-wrapper">
                        <Image src="photos/fabrizio.jpg" roundedCircle />
                        <h3>Fabrizo</h3>

                    </Col>
                    </Row>*/}


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
                    }}></div>
                    <div class="holder" style={{
                        backgroundImage: "url(" + "photos/nizar.png" + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                    <div class="holder" style={{
                        backgroundImage: "url(" + "photos/daniel.jpg" + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}></div>
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