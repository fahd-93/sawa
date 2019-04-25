
import React, { Component } from 'react';
import CardCampaign from './CardCampaign';
import ControlledCarousel from './ControlledCarousel';
import { Container, Row, Col } from 'react-bootstrap';


class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <ControlledCarousel />
                <Container>
                    <Row>
                        <Col>
                            <h5 className="text-center p-2 m-3">Latest Campaigns</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col><CardCampaign /></Col>
                        <Col><CardCampaign /></Col>
                        <Col><CardCampaign /></Col>
                    </Row>
                    <div className="text-right p-2 m-2">
                        <a href="/showcampaign" target="_blank" rel="noopener noreferrer">See more...</a>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default HomePage;