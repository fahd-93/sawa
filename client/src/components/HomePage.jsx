import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import CardCampaign from './CardCampaign';
import { Row, Col } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
            <NavigationBar />
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