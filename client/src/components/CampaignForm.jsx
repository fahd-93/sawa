import React, { Component } from 'react';
import axios from 'axios';

class CampaignForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            campaignName: '',
            campaignDesc: '',
            campaignCategory: ''
        };
    }

    change = e => {
        console.log({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleOptions = e => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            campaignCategory: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        let category = this.state.campaignCategory.trim();
        console.log(this.state);
        axios.post(`http://localhost:4000/api/campaign/${category}`, this.state)
            .then( response =>  {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render(){
        return(
            <div className="form-container">
                <h1 className="camp-name">Campaign Form</h1>
                <form method='post'>
                    <label >Campaign Name:</label>
                    <input type="text"
                           name="campaignName"
                           value={this.state.campaignName}
                           onChange={e => this.change(e)}
                           placeholder="Think of a good name for your campaign"/>
                    <label>Campaign Description:</label>
                    <textarea name="campaignDesc"
                              cols="50" rows="8"
                              value={this.state.campaignDesc}
                              onChange={e => this.change(e)}
                           placeholder="Remember to give an overview of your campaign.
                           You better give some context why and for what your creating this campaign."
                    />
                    <label>Please select the category of your campaign:</label>
                    <select
                            onChange={e => this.handleOptions(e)}>
                        <option >Choose One Category</option>
                        <option value="medical">Medical</option>
                        <option value="construction">Construction</option>
                        <option value="education">Education</option>
                    </select>

                           <br/><br/>
                    <button className='submit-btn'
                            onClick={this.onSubmit}>Next</button>
                </form>
            </div>
        )
    }
}

export default CampaignForm;