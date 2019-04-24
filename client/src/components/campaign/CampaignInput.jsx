import React, { Component } from 'react';

class CampaignInput extends Component{

    render() {
        return(
            <div >
                <label>Campaign Name:</label>
                <input type="text"
                       name="title"
                       ref={this.titleRef}
                       placeholder="Think of a good name for your campaign"/>
                <br/><br/>
                <label>Campaign Description:</label>
                <br/><br/>
                <textarea name="description"
                          ref={this.descriptionRef}
                          cols="50" rows="8"
                          placeholder="Remember to give an overview of your campaign.
                                  You better give some context why and for what your creating this campaign."
                />
                <br/><br/>
                <label>How Many volunteers the campaign needs?</label>
                <br/><br/>
                <input name="num_of_volunteers"
                       ref={this.numOfVolunteersRef}
                       type="number"/>
            </div>
        )
    }

}

export default CampaignInput;