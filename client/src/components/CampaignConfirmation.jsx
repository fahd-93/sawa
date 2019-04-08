import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class CampaignConfirmation extends Component {

    handleEdit = e => {
        e.preventDefault();
        console.log(e.currentTarget.textContent.trim());
    };

    handleDelete = e => {
      e.preventDefault();
      console.log(e.currentTarget.textContent.trim());
    };
    render(){
        const campaign = this.props.state;
        return(
            <div className="form-container">
                <div className="flex-position">
                    <form className="form-container">
                        <div> Category: {campaign.category} </div>
                        <div> Title: {campaign.title} </div>
                        <div> Campaign Description: {campaign.description} </div>
                        <div> Location: {campaign.location} </div>
                        <div> Volunteer type: {campaign.type_of_volunteers} </div>
                        <div> Number of Volunteers: {campaign.num_of_volunteers} </div>
                        <div> Start Campaign: {campaign.start_date} </div>
                        <div> End Campaign: {campaign.end_date} </div>

                        <img alt="img"
                             src="../../public/images/cocktail-6.jpg"/>

                        <Link   to={"/edit-campaign"}
                                className="submit-btn"
                                onClick={e => this.handleEdit(e) }>
                            Edit Campaign
                        </Link>

                        <button className="submit-btn"
                                onClick={ e => this.handleDelete(e) }>
                            Delete Campaign
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state.campaignReducer
});

export default connect( mapStateToProps, null  )( CampaignConfirmation );