import React, { Component } from 'react';

class CampaignDate extends Component {

    render(){
        return(
            <div>
                <br/><br/>
                <label> Start Date:</label>
                <input type="date" name="start_date"/>
                <br/><br/>
                <label> End Date:</label>
                <input type="date" name="end_date"/>
                <br/>
            </div>
        )
    }
}


export default CampaignDate;