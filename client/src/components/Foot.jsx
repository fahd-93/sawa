import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Foot = (props) => {
    return (
        <div>
            <section id="footer" class="fixed-bottom">
                <Container>
                    <Row>
                        <Col className="text-sm-left ">
                            <ul className="list-unstyled quick-links">
                                <li className="list-inline-item"><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-angle-double-right"></i>How it works</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center text-white">
                            <p className="h6"> All right Reversed.<a className=" ml-2" href="https://www.linkedin.com/in/fabriziomusa" rel="noopener noreferrer" target="_blank">Fabrizio Musa</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default Foot;