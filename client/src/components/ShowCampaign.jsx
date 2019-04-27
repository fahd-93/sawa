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

        this.setState({
            campaignId: e
        });
        this.props.getCampId(e)
    };

    searchBar = (e) => {
        e.preventDefault();
                // let searchBar = document.getElementById("searchBar");

        console.log('The link was clicked.', document.getElementById("searchBar"));
    }
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

            <div className="cam-container">


                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search campaign" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" type="submit" onClick={this.searchBar} id="searchBar">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <h1 className="cam-header">Existing Campaingns</h1>
                <CardColumns >

                    {campaign.map(user =>

                        <Link to={`/users/campaign/${user._id}`} onClick={() => this.getId(user._id)}>
                            <Card key={user._id}>
                                <Card.Img variant="top" src={`http://localhost:4000/uploads/${user.image}`} />
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
function mapStateToProps(state) {
    // if (state.campaign.campaign === undefined) { return null }
    // let arrayCampaign = state.campaign.campaign;
    // const campaignID = arrayCampaign.map(x => x._id);
    // console.log(campaignID);

    // console.log('state from props CampaignCards PAGE', state.campaign.campaign);
    return {
        campaign: state.campaign.campaign
    };
}


export default connect(mapStateToProps, { getAllCamp, getCampId })(ShowCampaign);