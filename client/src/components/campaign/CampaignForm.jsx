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

                <div className="form-container">
                    <div className="flex-position">
                        <h1> Campaign Form </h1>
                        <CampaignType/>
                        <LocationForm/>
                        <Link to={`${this.props.category}-form`}>
                            Next
                        </Link>
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