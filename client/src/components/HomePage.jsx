
import React, { Component } from 'react';
import ControlledCarousel from './ControlledCarousel';
import { getAllCamp } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import { Row, Col, Card, CardColumns, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';




class HomePage extends Component {
    state = {}

    componentDidMount() {
        this.props.getAllCamp();
    }


    render() {


        if (this.props.campaign === undefined) {
            return (
                <div className="d-flex mx-auto m-5">
                    <Spinner animation="border" variant="success" size="lg"/>
                    <h3 className="ml-3 spinner-sawa">loading...</h3>
                </div>
                )
        }

        const campaign = this.props.campaign;
        const campaignArray = campaign.slice(0, 3)
        return (

            <React.Fragment>
                        <ControlledCarousel />

                        <div className="cam-container">
                            <Row>
                                <Col>
                                    <h5 className="text-center p-2 m-3">Latest Campaigns</h5>
                                </Col>
                            </Row>
                            <CardColumns>
                                {


                                    campaignArray.map(item =>

                                        <Link to={`/users/campaign/${item._id}`} onClick={() => this.getId(item._id)}>
                                            <Card key={item._id}>
                                                <Card.Img variant="top" src={`http://localhost:4000/uploads/${item.image}`} />
                                                <Card.Body>
                                                    <Card.Title>Title: {item.title}</Card.Title>
                                                    <Card.Text>Description: {item.description}</Card.Text>
                                                    <Card.Text>Categories: {item.categories}</Card.Text>
                                                </Card.Body>
                                                <Card.Footer>

                                                    <small className="text-muted">Created at: {item.created_at}</small>

                                                </Card.Footer>
                                                {/* <button>show</button> */}
                                            </Card>
                                        </Link>

                                    )}

                            </CardColumns>

                            <div className="text-right p-2 m-2">
                                <a href="/showcampaign"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    See more...
                        </a>
                            </div>
                        </div>

                    </React.Fragment>
                    )
                }
            
            
            }
function mapStateToProps(state) {
    
    return {
                        campaign: state.campaign.campaign
                };
            }
export default connect(mapStateToProps, {getAllCamp}) (HomePage);