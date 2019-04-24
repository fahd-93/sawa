import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Foot = (props) => {
    return (
        <div>
            <section id="footer" className="fixed-bottom">
                <Container>
                    <Row>
                        <Col className="text-sm-left ">
                            <ul className="list-unstyled quick-links">
                                <li className="list-inline-item"><Link to=''><i className="fa fa-angle-double-right"></i>Home</Link></li>
                                <li className="list-inline-item"><Link to=''><i className="fa fa-angle-double-right"></i>About</Link></li>
                                <li className="list-inline-item"><Link to=''><i className="fa fa-angle-double-right"></i>FAQ</Link></li>
                                <li className="list-inline-item"><Link to=''><i className="fa fa-angle-double-right"></i>How it works</Link></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><Link to=''><i className="fa fa-facebook"></i></Link></li>
                                <li className="list-inline-item"><Link to=''><i className="fa fa-twitter"></i></Link></li>
                                <li className="list-inline-item"><Link to=''><i className="fa fa-instagram"></i></Link></li>
                                <li className="list-inline-item"><Link to=''><i className="fa fa-google-plus"></i></Link></li>
                                <li className="list-inline-item"><Link to='' target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></Link></li>
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