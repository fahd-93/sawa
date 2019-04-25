import React, { Component } from 'react';

class CampaignDate extends Component {

    render(){
        return(
            <div className="row">
                <div className="col-25">
                    <label> Start Date:</label>
                </div>
                <div className="col-75">
                    <input type="date" name="start_date"
                           className="date"
                           ref={this.startDateRef}/>
                </div>

                <div className="col-25">
                    <label> End Date:</label>
                </div>
                <div className="col-75">
                    <input type="date" name="end_date"
                           className="date"
                           ref={this.endDateRef}/>
                </div>

            </div>
        )
    }
}


export default CampaignDate;