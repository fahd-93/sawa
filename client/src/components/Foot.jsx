import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Foot = () => {
    return (

        <section id="footer">
            <div className="container">
                <Row>
                    <Col >
                        <ul className="list-unstyled quick-links justify-content-between">
                            <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-angle-double-right"></i>Home</a></li>
                            <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-angle-double-right"></i>About</a></li>
                            <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                            <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-angle-double-right"></i>How it works</a></li>
                        </ul>
                    </Col>

                    <Col>
                        <ul className="list-unstyled list-inline social text-right">
                            <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="https://example.com"><i className="fa fa-google-plus"></i></a></li>
                            <li className="list-inline-item"><a href="https://example.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>

    )
};

export default Foot;