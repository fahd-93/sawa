import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { reviewCampaign } from "../redux/actions/actionCreator";

class ConstructionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    ConstructionTypeList =[
        "General Helper",
        "Construction Carpenter",
        "Construction Electrician",
        "Mason",
        "Plumber",
        "Welder",
        "Glazier",
        "Plasterer",
        "Roofer",
        "Site Superintendent",
        "Construction Managers",
        "Metal Fabricators",
        "Site Engineers",
        "Designers",
        "Elevator Mechanic",
        "Civil Engineer",
        "Field Engineer",
        "Planner",
        "Construction Engineer",
        "Equipment Operators"
    ];
    handelSubmit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.reviewCampaign(this.state);
    };

    render(){
        return(
            <div className="container">
                <div className='flex-position'>
                    <div className="form-container">
                        <h1>Construction Form</h1>
                        <form action="/"
                              method="post"
                              encType="multipart/form-data"
                              onChange={ e => this.handelSubmit(e)}>

                            <label >Campaign Name:</label>
                            <input type="text"
                                   name="title"
                                   placeholder="Think of a good name for your campaign"/>

                            <label>Campaign Description:</label>
                            <textarea name="description"
                                      cols="50" rows="8"
                                      placeholder="Remember to give an overview of your campaign.
                                   You better give some context why and for what your creating this campaign."
                            />
                            <label>Campaign Location:</label>
                            <select name="location">
                                <option defaultValue>Choose Location</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                            <label>How Many volunteers the campaign needs?</label>
                            <input name="num_of_volunteers"
                                   type="number"/>

                            <label>What Type of help the campaign needs?</label>
                            <select name="type_of_volunteers"
                                    type="number">
                                <option defaultValue>Choose Type of help your campaign needs:</option>
                                {this.ConstructionTypeList.map( (item, index) => {
                                    return(
                                        <option value={item} key={index}>{item}</option>
                                    )
                                })}
                            </select>

                            <label> Campaign Date:</label>
                            <label> Start Date:</label>
                            <select name="start_date">
                                <option defaultValue>When will your campaign start?</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                            </select>
                            <label> End Date:</label>
                            <select name="end_date">
                                <option defaultValue>When will your campaign start?</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                            </select>
                            <div className="form-container">
                                <label> Images and Video: </label>
                               {/* <p>
                                    It will be beneficial to your campaign to have images or a video message,
                                    where you tell more about your ideas and intentions for what your to achieve.
                                    Try to take pictures of the location and make a photo gallery with the
                                    development of the campaign.
                                </p>*/}
                                <div className="form-group">
                                    <label> Upload Image </label>
                                    <input name="image" required
                                           type="file"
                                           id="image"
                                    />
                                </div>
                            </div>
                            <Link to={"/confirm-entery"}
                                  className='submit-btn'
                                  onClick={this.handelSubmit}>
                                Submit
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect( null, { reviewCampaign })( ConstructionForm );