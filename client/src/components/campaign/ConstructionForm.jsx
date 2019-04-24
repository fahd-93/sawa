import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveCampaign } from "../../redux/actions/actionCreator";
import VolunteerType from "./VolunteerType";
import CampaignDate from './CampaignDate';
import CampaignInput from './CampaignInput';


class ConstructionForm extends Component {
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.numOfVolunteersRef = React.createRef();
        this.typeOfVolunteersRef = React.createRef();
        this.locationRef = React.createRef();
        this.startDateRef = React.createRef();
        this.endDateRef = React.createRef();
        this.userImageRef = React.createRef();
        this.videoRef = React.createRef();
        this.state = {}
    }

    handelInputs = (e) => {
        e.preventDefault();

        this.setState({
            category: this.props.campaign.category,
            /*latitude: this.props.campaign.campaign_location.latlng.lat,
            longitude: this.props.campaign.campaign_location.latlng.lng,*/
            [e.target.name]: e.target.value,
        });

    };

    handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.set("title", this.state.title);
        formData.set("description", this.state.description);
        formData.set("num_of_volunteers", this.state.num_of_volunteers);
        formData.set("type_of_volunteers", this.state.type_of_volunteers);
        formData.set("start_date", this.state.start_date);
        formData.set("end_date", this.state.end_date);
        formData.set("latitude", this.state.latitude);
        formData.set("longitude", this.state.longitude);
        formData.set("category", this.state.category);
        formData.append("image", this.userImageRef.current.files[0]);

        this.props.saveCampaign(this.state, formData);
    };

    render() {
        return (
            <div>
                <div >
                    <form onChange={ e => this.handelInputs(e)}>
                        <CampaignInput />
                        <br /><br />
                        <VolunteerType />
                        <br /><br />
                        <CampaignDate />

                        <label> Upload Image:</label>
                        <input type="file" name="image"
                            ref={this.userImageRef} />

                        <button onClick={e => this.handleSubmit(e)}>
                            <Link to='/showcampaign'>
                                Save
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    campaign: state.campaign
});

export default connect(mapStateToProps, { saveCampaign })(ConstructionForm);