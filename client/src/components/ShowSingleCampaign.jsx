import React, { Component } from 'react';
import { connect } from "react-redux";



class ShowSingleCampaign extends Component {

    render() {
        return (
            <div>
                Hey bla
            </div>
        )
    }
}

const mapStateToProps = state => {


    console.log(state);

    return { campaign_id: state.campaign.campaign }
}

export default connect(mapStateToProps, null)(ShowSingleCampaign);