import React, { Component } from "react";
import {Link} from "react-router-dom";
// import AddressForm from './AddressForm';
import { connect } from 'react-redux';
import { addLocation } from "../redux/actions/actionCreator";

class LocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handelInputs = e => {
        e.preventDefault();
        let coordinates = {
            latitude: "34.8021",
            longitude: "38.9968"
        };
        this.setState({
            [e.target.name]: coordinates
        })
    };

    handelSubmit = () => {
        this.props.addLocation(this.state);
    };



    render() {
        return(
            <div className="container">
                <div className="flex-position">
                    <h1>Location Form</h1>
                    <div>
                        <h2>Here Geocoder Autocomplete Validation</h2>
                    </div>
                   {/* <AddressForm /> */}

                    <form onChange={ e => this.handelInputs(e)}>
                        <br/>
                        <label>Campaign Location:</label>
                        <input type="text"
                               name="location"
                               placeholder="Put Your Location"/>
                        <br/>
                        <br/>
                        <Link to="/save-form"
                              className="submit-btn"
                              onClick={ e => this.handelSubmit(e) }>
                            Next
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { addLocation } )(LocationForm);