import React, { Component } from 'react';
import { getAllCamp, getCampId } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Row, Col, CardColumns, Card, Spinner } from "react-bootstrap";

class ShowCampaign extends Component {

    state = {};

    componentDidMount() {
        this.props.getAllCamp();

    }

    getId = (e) => {
        this.setState({ campaignId: e });
        this.props.getCampId(e);
    };

    render() {
        if (this.props.campaign === undefined) {
            return (
                <div className="d-flex mx-auto m-5 align-baseline">
                    <Spinner animation="border" variant="success" size="lg" />
                    <h2 className="ml-3 spinner-sawa">loading...</h2>
                </div>
            )
        }

        const campaign = this.props.campaign;
        return (
            <React.Fragment>
            <div className = "cam-container">
            <Row>
                    <Col>
                    <h1 className= "cam-header">Existing Campaigns</h1>
                    </Col>
                </Row>

            <CardColumns >

                {campaign.map(user =>
                
                    <Link to={`/users/campaign/${user._id}`} onClick={() => this.getId(user._id)}>
                        <Card key={user._id}>
                        <div >
                            <Card.Img variant="top"  src={`http://localhost:4000/uploads/${user.image}`} />
                            </div>
                            <Card.Body>
                                <Card.Title> {user.title}</Card.Title>
                                <Card.Text>Created by: {user.created_by}</Card.Text>
                                <hr></hr>
                                {/* <Card.Text>Description: {user.description}</Card.Text> */}
                                <Card.Text>Category: {user.categories}</Card.Text>
                            </Card.Body>
                            <Card.Footer>

                                <small className="text-muted">Created at: {user.created_at}</small>

                            </Card.Footer>

                        </Card>
                    </Link>

                )
                }
            </CardColumns>

            </div>

            </React.Fragment>

        )
    }
}

const mapStateToProps =(state) => ({
    campaign: state.campaign.campaign
});

export default connect(mapStateToProps, { getAllCamp, getCampId })(ShowCampaign);