import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveCampaign } from "../redux/actions/actionCreator";


class SaveCampaignForm extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    handleInputs = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = () => {
        this.props.saveCampaign(this.props.state, this.state);
    };

    render(){
        const campaign = this.props.state;
        console.log(campaign);

        return(
            <div className="form-container">
                <div className="flex-position">
                    <form onChange={ e => this.handleInputs(e)}>
                        <br/>
                        <h2>Campaign Category: {campaign.category}</h2>

                        <h3>Campaign Name:</h3>
                        <input name="title"
                               defaultValue={campaign.title.toUpperCase()}
                               contentEditable/>

                        <h3>Campaign Description:</h3>

                        <input name="description"
                               defaultValue={campaign.description}
                               contentEditable/>
                        <h3> Location:</h3>
                        <input type="text" name="location"
                               contentEditable
                               defaultValue={campaign.location.city}/>
                        <h3> Start Date:</h3>
                        <input type="date" name="start_date"
                               contentEditable
                               defaultValue={campaign.start_date}/>
                        <br/><br/>
                        <h3> End Date:</h3>
                        <input type="date" name="end_date"
                               contentEditable
                               defaultValue={campaign.end_date}/>
                        <h3> Number of Volunteers:</h3>

                        <input type="number" name="num_of_volunteers"
                               contentEditable
                               defaultValue={campaign.num_of_volunteers}/>

                        <h3> Type of Volunteers:</h3>
                        <input type="text" name="type_of_volunteers"
                               contentEditable
                               defaultValue={campaign.type_of_volunteers}/>


                        <Link to={'/display-campaign'}
                              className="submit-btn"
                              onClick={ e => this.handleSubmit(e) }>
                            Save
                        </Link>
                        <Link to={'/location-form'}
                              className="submit-btn">
                            Back
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state.campaignReducer,
});

export default connect( mapStateToProps, { saveCampaign }  )( SaveCampaignForm );