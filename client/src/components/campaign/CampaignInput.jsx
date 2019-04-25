import React, { Component } from 'react';

class CampaignInput extends Component{

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-25">
                        <label>Campaign Name:</label>
                    </div>
                    <div className="col-75">
                        <input type="text"
                               name="title"
                               ref={this.titleRef}
                               placeholder="Think of a good name for your campaign"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Campaign Description:</label>
                    </div>
                    <div className="col-75">
                        <textarea name="description"
                                  ref={this.descriptionRef}
                                  placeholder="Remember to give an overview of your campaign.
                                          You better give some context why and for what your creating this campaign."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Number Of Volunteers:</label>
                    </div>
                    <div className="col-75">
                        <input name="num_of_volunteers"
                               placeholder="Add How Many Volunteers Your Campaign Needs"
                               ref={this.numOfVolunteersRef}
                               type="number"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default CampaignInput;