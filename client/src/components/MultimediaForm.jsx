import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { saveCampaign} from "../redux/actions/actionCreator";

class MultimediaForm extends Component {

    render(){
        return(
            <div className="form-container">
                <form action="">
                    <label> Images and Video: </label>
                    <div className="form-group">
                        <label> Upload Image </label>
                        <input name="image" required
                               type="file"
                               id="image"
                        />
                    </div>
                    <Link to={'/location-form'}> Back </Link>
                    <Link to={'/campaign-form'}> Save </Link>
                </form>
             </div>


        )
    }
}

export default connect( null, { saveCampaign } )(MultimediaForm);