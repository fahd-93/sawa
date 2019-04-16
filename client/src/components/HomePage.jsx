import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import CardCampaign from './CardCampaign';
import Foot from './Foot';

import { Row, Col } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <h5>Latest Campaigns</h5>
                <Row>
                    <Col><CardCampaign /></Col>
                    <Col><CardCampaign /></Col>
                    <Col><CardCampaign /></Col>
                </Row>
                <Foot />
            </React.Fragment>
        )
    }
}

export default HomePage;