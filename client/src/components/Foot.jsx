import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Foot = (props)=> {
    return (
        <div>
            <section id="footer">
                <Container>
                    <Row>
                        <Col className="  text-sm-left ">
                            <ul className="list-unstyled quick-links">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>How it works</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul className="list-unstyled list-inline social text-center">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                <Row>
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6"> All right Reversed.<a className=" ml-2" href="https://www.linkedin.com/in/fabriziomusa" rel="noopener noreferrer" target="_blank">Fabrizio Musa</a></p>
                    </div>
                  </Row>
            </Container>
            </section>
        </div>
    )
};

export default Foot;