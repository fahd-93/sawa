import React, { Component } from 'react';
import CardCampaign from './CardCampaign';
import { Row, Col } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <h5>Latest Campaigns</h5>
                <Row>
                    <Col><CardCampaign /></Col>
                    <Col><CardCampaign /></Col>
                    <Col><CardCampaign /></Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default HomePage;