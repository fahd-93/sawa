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
                        <h3 className='text'><span>Campaign Form</span></h3>
                        <CampaignType/>
                        <LocationForm/>
                       <Link to={`${this.props.category}-form`}
                             className="btn-style">
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
    loggedInUser: state.userReducer.loggedInUser
});

export default connect(mapStateToProps, { addCategory })(CampaignForm);