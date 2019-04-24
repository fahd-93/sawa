
import React, { Component } from 'react';
import CardCampaign from './CardCampaign';
import ControlledCarousel from './ControlledCarousel' 
//import Foot from './Foot';
import CampaignCards from './CampaignCards'

// import Header from './Header';
import { Row, Col } from 'react-bootstrap';
import UserCards from './UserCards';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
                <ControlledCarousel />
                <h5>Latest Campaigns</h5>
                {/* <Row>
                    <Col><CardCampaign /></Col>
                    <Col><CardCampaign /></Col>
                    <Col><CardCampaign /></Col>
                </Row> */}
                < CampaignCards />
                {/* <UserCards /> */}
                
                {/* <Foot /> */}
            </React.Fragment>
        )
    }
}

export default HomePage;