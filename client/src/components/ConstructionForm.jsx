import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveCampaign } from "../redux/actions/actionCreator";
import VolunteerType from "./campaign/VolunteerType";
import CampaignDate from './campaign/CampaignDate';
import CampaignInput from './campaign/CampaignInput';


class ConstructionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handelInputs = (e) => {
        e.preventDefault();
        this.setState({
            category: this.props.category,
            [e.target.name]: e.target.value,
        });
        console.log(this.state);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
        let formData = new FormData();
        Object.keys(this.state).map( (inputs, index) => {
            /*
            formData.append(this.state);

            this.props.saveCampaign(this.state, formData);*/
           if(inputs === 'image'){
               formData.append('image', this.state.image);
               console.log('if',formData);
           } else {
               formData.set(inputs, this.state[inputs]);
               console.log(formData)
           }
        });

        // formData.set("title", this.state.title);
        // formData.set("description", this.state.description);
        // formData.set("num_of_volunteers", this.state.num_of_volunteers);
        // formData.set("type_of_volunteers", this.state.type_of_volunteers);
        // formData.set("start_date", this.state.start_date);
        // formData.set("end_date", this.state.end_date);
        // formData.append("image", this.userImageRef.current.files[0]);
        //formData.append("video", this.videoRef.current.files[0]);

        this.props.saveCampaign(formData);
        console.log(forData)
    };

    render(){
        return(
            <div>
                <div >
                    <form onChange={ e => this.handelInputs(e)}>
                        <CampaignInput/>
                        <br/><br/>
                        <VolunteerType />
                        <br/><br/>
                        <CampaignDate/>

                        <label> Upload Image:</label>
                        <input type="file" name="image"/>

                        <label> Upload Video:</label>
                        <input type="file" name="video"/>
                        <input type="submit"
                                onClick={ e => this.handleSubmit(e)} />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    category: state.campaignReducer.category
});

export default connect(
    mapStateToProps,
    { saveCampaign })
( ConstructionForm );