import React, { Component } from 'react';
import { getAllCamp, getCampId } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { CardColumns, Card, Spinner } from "react-bootstrap";

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

        return (
            <div className="camp-form-container">
                <div className="text">
                    <span>Existing Campaigns</span>
                </div>
                <CardColumns >

                    {this.props.campaign.map(user =>

                        <Link to={`/users/campaign/${user._id}`}
                              onClick={() => this.getId(user._id)}>
                            <Card key={user._id}>
                                <Card.Img variant="top"
                                          src={`http://localhost:4000/uploads/${user.image}`} />
                                <Card.Body>
                                    <Card.Title>Title: {user.title}</Card.Title>
                                    <Card.Text>Description: {user.description}</Card.Text>
                                    <Card.Text>Categories: {user.categories}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Created at: {user.created_at}</small>
                                </Card.Footer>
                                {/* <button>show</button> */}
                            </Card>
                        </Link>
                    )
                    }
                </CardColumns>
            </div>
        )
    }
}
const mapStateToProps =(state) => ({
    campaign: state.campaign.campaign
});

export default connect(mapStateToProps, { getAllCamp, getCampId })(ShowCampaign);