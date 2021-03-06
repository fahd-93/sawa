import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveCampaign } from "../../redux/actions/actionCreator";
import VolunteerType from "./VolunteerType";
import CampaignDate from './CampaignDate';
import CampaignInput from './CampaignInput';
import * as jwt_decode from "jwt-decode";
import axios from "axios";

class MedicalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.numOfVolunteersRef = React.createRef();
        this.typeOfVolunteersRef = React.createRef();
        this.locationRef = React.createRef();
        this.startDateRef = React.createRef();
        this.endDateRef = React.createRef();
        this.userImageRef = React.createRef();
        // this.videoRef = React.createRef();
    }

    handelInputs = (e) => {
        e.preventDefault();
        const jwtToken = localStorage.getItem('JWT_TOKEN');

        if (jwtToken) {
            try {
                let x = jwt_decode(jwtToken);

                axios.defaults.headers.common['Authorization'] = jwtToken;

                this.setState({id: x.sub})
            }
            catch (error) {console.log(error)}
        }
        this.setState({
            category: this.props.campaign.category,
            latitude: this.props.campaign.campaign_location.latlng.lat,
            longitude: this.props.campaign.campaign_location.latlng.lng,
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
        if (this.props.isAuth) {
            return (
                <div className="camp-form-container">
                    <div className="margin-center">
                        <h3 className='text'><span>Medical Campaign</span></h3>
                        <form onChange={e => this.handelInputs(e)}>
                            <CampaignInput/>

                            <VolunteerType/>

                            <CampaignDate/>
                            <div className="row">
                                <div className="col-25">
                                    <label> Upload Image:</label>
                                </div>
                                <div className="col-75">
                                    <input type="file"
                                           name="image"
                                           ref={this.userImageRef}/>
                                </div>

                                <div onClick={e => this.handleSubmit(e)}
                                     className="btn-div">
                                    <Link to='/showcampaign'
                                          className="btn-style">
                                        Next
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        return (
            <div>Unauthorized User, Please LogIn or Sign up to be able to create a campaign</div>
        )
    }
}

const mapStateToProps = state => ({
    campaign: state.campaign
});

export default connect(mapStateToProps, { saveCampaign })(MedicalForm);