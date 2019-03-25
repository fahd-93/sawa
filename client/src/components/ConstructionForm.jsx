import React, { Component } from "react";
import {Link} from "react-router-dom";

class ConstructionForm extends Component {
    render(){
        return(
            <div className="container">
                <div className='flex-position'>
                    <div className="form-container">
                        <h1>Construction Form</h1>
                        <form action="/"
                              method="post"
                              encType="multipart/form-data">

                            <label >Campaign Name:</label>
                            <input type="text"
                                   name="campaignName"
                                   placeholder="Think of a good name for your campaign"/>

                            <label>Campaign Description:</label>
                            <textarea name="campaignDesc"
                                      cols="50" rows="8"
                                      placeholder="Remember to give an overview of your campaign.
                                   You better give some context why and for what your creating this campaign."
                            />
                            <label>Campaign Location:</label>
                            <select onChange={e => this.handleOptions(e)}>
                                <option defaultValue>Choose Location</option>
                              {/*  <option value="medical">Medical</option>
                                <option value="construction">Construction</option>
                                <option value="education">Education</option>*/}
                            </select>

                            <label>How Many volunteers the campaign needs?</label>
                            <input type="number"/>

                            <label>What Type of help the campaign needs?</label>
                            <select onChange={e => this.handleOptions(e)}>
                                <option defaultValue>Choose Type of help your campaign needs:</option>
                                {/*  <option value="medical">Medical</option>
                                <option value="construction">Construction</option>
                                <option value="education">Education</option>*/}
                            </select>

                            <label> Campaign Date:</label>
                            <select onChange={e => this.handleOptions(e)}>
                                <option defaultValue>When will your campaign start?</option>
                                {/*  <option value="medical">Medical</option>
                                <option value="construction">Construction</option>
                                <option value="education">Education</option>*/}
                            </select>
                            <div className="form-container">
                                <label> Images and Video: </label>
                                <p>
                                    It will be beneficial to your campaign to have images or a video message,
                                    where you tell more about your ideas and intentions for what your to achieve.
                                    Try to take pictures of the location and make a photo gallery with the
                                    development of the campaign.
                                </p>
                                <div className="form-group">
                                    <label> Upload Image </label>
                                    <input name="image" required
                                           type="file"
                                           id="image"
                                    />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConstructionForm;