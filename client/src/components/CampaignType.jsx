import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addCategory } from "../redux/actions/actionCreator";

class CampaignForm extends Component {

    handleOptions = e => {
        e.preventDefault();
        this.props.addCategory(e.target.value);
    };

    render(){
        return(
            <div className="form-container">
                <h1 className="camp-name">Campaign Form</h1>
                <form >

                    <select onChange={e => this.handleOptions(e)}>
                        <option defaultValue>Choose One Category</option>
                        <option value="medical">Medical</option>
                        <option value="construction">Construction</option>
                        <option value="education">Education</option>
                    </select>

                    <Link to={`${this.props.category}-form`}
                          className="submit-btn">
                        Next
                    </Link>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    category: state.campaignReducer.category
});

export default connect(
    mapStateToProps,
    { addCategory }
    )( CampaignForm );