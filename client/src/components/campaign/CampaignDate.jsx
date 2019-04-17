import React, { Component } from 'react';

class CampaignDate extends Component {

    render(){
        return(
            <div>
                <br/><br/>
                <label> Start Date:</label>
                <input type="date" name="start_date"
                       ref={this.startDateRef}/>
                <br/><br/>
                <label> End Date:</label>
                <input type="date" name="end_date"
                       ref={this.endDateRef}/>
                <br/>
            </div>
        )
    }
}


export default CampaignDate;