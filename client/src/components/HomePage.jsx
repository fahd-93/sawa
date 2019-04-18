
import React, { Component } from 'react';
import CardCampaign from './CardCampaign';
import Foot from './Foot';
import ControlledCarousel from './ControlledCarousel';
import { Container, Row, Col } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                    <ControlledCarousel />
                <Container>
                    <h5>Latest Campaigns</h5>
                    <Row>
                        <Col><CardCampaign /></Col>
                        <Col><CardCampaign /></Col>
                        <Col><CardCampaign /></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default HomePage;