import React, { Component } from 'react';

class CampaignDate extends Component {

    render(){
        return(
            <div className="date-container">
                <div>
                    <label> Start Date:</label>
                    <input type="date" name="start_date"
                           className="date"
                           ref={this.startDateRef}/>
                </div>
                <div>
                    <label> End Date:</label>
                    <input type="date" name="end_date"
                           className="date"
                           ref={this.endDateRef}/>
                </div>
            </div>
        )
    }
}


export default CampaignDate;