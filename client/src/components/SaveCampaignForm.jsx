import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveCampaign } from "../redux/actions/actionCreator";


class SaveCampaignForm extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handelInputs = e => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handelSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.state);
        this.props.saveCampaign(this.props.state, this.props.category);
    };

    render(){
        const campaign = this.props.state;
        const category = this.props.category;
        console.log(campaign);
        return(
            <div className="form-container">
                <div className="flex-position">
                    <form onChange={ e => this.handelInputs(e)}>
                        <br/>
                        <h2>Campaign Category: {category}</h2>

                        <h3>Campaign Name:</h3>
                        <input name="title"
                               defaultValue={campaign.title}
                               contentEditable/>

                        <h3>Campaign Description:</h3>

                        <input name="description"
                               defaultValue={campaign.description}
                               contentEditable/>
                        <h3> Location:</h3>
                        <input type="text" name="location"
                               contentEditable
                               defaultValue={campaign.location}/>
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
                              onClick={ e => this.handelSubmit(e) }>
                            Save
                        </Link>

                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state.campaignReducer,
    category: state.campaignReducer.category
});

export default connect(
    mapStateToProps,
    { saveCampaign }  )
( SaveCampaignForm );