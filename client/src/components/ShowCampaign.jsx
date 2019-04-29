import React, { Component } from 'react';
import { getAllCamp, getCampId } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { CardColumns, Card, Spinner } from "react-bootstrap";
import axios from "axios";


class ShowCampaign extends Component {

    state = {};

    searchBar = (e) => {
        e.preventDefault();
        console.log('State', this.state.searchInput)
        let inputSearch = this.state.searchInput;

        axios
            .get(`http://localhost:4000/api/campaigns/search?query=${inputSearch}`)
            .then(res => {
                this.setState({
                    inputSearch: res.data.text
                })
            })
            .catch(error => console.log(error))
    }

    getSearchInput = e => {
        console.log(e.target.value)
        this.setState({
            searchInput: e.target.value
        })

    }
    componentDidMount() {
        this.props.getAllCamp();

    }
    getId = (e) => {

        this.setState({
            campaignId: e
        });
        this.props.getCampId(e)
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
        // const input = this.state.searchInput;


        return (

            <div className="cam-container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm"
                            onChange={this.getSearchInput}>
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control form-control-lg form-control-borderless" id="searchBar" placeholder="Search campaign" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" type="submit" onClick={this.searchBar} >Search</button>
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