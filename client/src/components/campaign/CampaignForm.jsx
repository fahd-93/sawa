import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addCategory } from "../../redux/actions/actionCreator";
import LocationForm from "./LocationForm";
import CampaignType from './CampaignType';

class CampaignForm extends Component {
    render() {
        if (this.props.isAuth) {
            return (
                <div className="camp-form-container">
                    <div className="container">
                        <h3>Campaign Form</h3>
                        <CampaignType/>
                        <LocationForm/>
                       <div className="btn-style">
                           <Link to={`${this.props.category}-form`}
                                className="btn btn-warning">
                                Next
                            </Link>
                       </div>
                    </div>
                </div>

            )
        }
        return <div>Hello</div>
    }
}

const mapStateToProps = state => ({
    category: state.campaign.category,
    loggedInUser: state.userReducer.loggedInUser,
    userId: state.auth.userId
});

export default connect(
    mapStateToProps,
    { addCategory }
)(CampaignForm);