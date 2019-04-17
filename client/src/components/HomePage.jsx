
import React, { Component } from 'react';
import CardCampaign from './CardCampaign';
import Foot from './Foot';
// import Header from './Header';
import { Row, Col } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
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