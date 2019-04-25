import React, { Component } from "react";
import { connect } from 'react-redux';
import AlgoliaPlaces from 'algolia-places-react';

import { addLocation } from "../../redux/actions/actionCreator";

class LocationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleInput = suggestion => {

        let location = suggestion.suggestion;

        this.setState({
            city: location.name,
            postcode: location.postcode,
            country: location.country,
            countryCode: location.countryCode,
            type: location.type,
            latlng: {
                lat: location.latlng.lat,
                lng: location.latlng.lng
            }
        });
        this.props.addLocation(this.state);
    };

    render() {
        return (
            <div className="location-form">
                <label>Campaign Location:</label>
                <AlgoliaPlaces
                    name='AlgoliaPlaces'
                    placeholder="Write an address here"
                    options={{
                        appId: 'pl48PRQJVY9X',
                        apiKey: '976ae5509e3452dbc494dd1e9f390486'
                    }}
                    onChange={(suggestion) => this.handleInput(suggestion)}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    category: state.campaign.category
});

export default connect(
    mapStateToProps,
    { addLocation }
)(LocationForm);