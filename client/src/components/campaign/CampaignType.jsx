import React, { Component } from 'react';
import { connect } from "react-redux";
import { addCategory } from "../../redux/actions/actionCreator";

class CampaignType extends Component {

    handleOptions = e => {
        e.preventDefault();
        this.props.addCategory(e.target.value);
    };

    render(){
        return(
            <div className="form-container">
                <form>
                    <select onChange={e => this.handleOptions(e)}>
                        <option defaultValue>Choose One Category</option>
                        <option value="medical">Medical</option>
                        <option value="construction">Construction</option>
                        <option value="education">Education</option>
                    </select>
                </form>
            </div>
        )
    }
}


export default connect( null, { addCategory })( CampaignType );