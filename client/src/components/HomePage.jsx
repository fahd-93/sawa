import React, { Component } from 'react';
import ControlledCarousel from './ControlledCarousel';
import { getAllCamp, getCampId } from '../redux/actions/actionCreator';
import { connect } from 'react-redux';
import { Row, Col, Card, CardColumns, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	state = {};

	componentDidMount() {
		this.props.getAllCamp();
	}
	getId = (e) => {
		this.setState({
			campaignId: e
		});
		this.props.getCampId(e);
	};

    render() {

        if (this.props.campaign === undefined) {
            return (
                <div className="d-flex mx-auto m-5 align-baseline">
                    <Spinner animation="border" variant="success" size="lg"/>
                    <h2 className="ml-3 spinner-sawa">loading...</h2>
                </div>
                )
        }
        const campaign = this.props.campaign;
        const campaignArray = campaign.slice(0, 3);
        return (
               <React.Fragment>
                   <ControlledCarousel/>
                   <div className="campaigns-container">
                       <div className="text" >
                           <span>Latest Campaigns</span>
                       </div>

                       <div className="cam-container-home">
                           <Row>
                               <Col>
                                   <h5 className="cam-header">Latest Campaigns</h5>
                               </Col>
                           </Row>
                           <CardColumns>
                               {campaignArray.map((user) => (
                                   <Link to={`/users/campaign/${user._id}`} onClick={() => this.getId(user._id)}>
                                       <Card key={user._id}>
                                           <Card.Img variant="top" src={`http://localhost:4000/uploads/${user.image}`} />
                                           <Card.Body>
                                               <Card.Title>{user.title}</Card.Title>
                                               {/* <Card.Text>Description: {user.description}</Card.Text> */}
                                               <Card.Text>Category: {user.categories}</Card.Text>
                                               <Card.Text>Created by: {user.created_by}</Card.Text>
                                           </Card.Body>
                                           <Card.Footer>
                                               <small className="text-muted">Created at: {user.created_at}</small>
                                           </Card.Footer>
                                       </Card>
                                   </Link>
                               ))}
                           </CardColumns>

                           <div className="text-right p-2 m-2 ">
                               <Link to="showcampaign"
                                     rel="noopener noreferrer">
                                   See more...
                               </Link>
                           </div>
                       </div>
                   </div>
               </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    campaign: state.campaign.campaign
});

export default connect(mapStateToProps, {getAllCamp, getCampId }) (HomePage);
