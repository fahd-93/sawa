import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CampaignConfirmation extends Component {

    render(){
        console.log(this.props.state.category);
        return(
            <div>
                <h1> Category: {this.props.state.category}</h1>
                <h1>Title: {this.props.state.title}</h1>
                <h1>Campaign Description: {this.props.state.description}</h1>
                <h1>Volunteer type: {this.props.state.type_of_volunteers}</h1>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state.campaignReducer
});

export default connect( mapStateToProps, null )( CampaignConfirmation );