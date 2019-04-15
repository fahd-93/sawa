import React, { Component } from 'react';
import { connect } from "react-redux";
import { getLocation } from "../redux/actions/actionCreator";


class Geolocation extends Component{

    componentDidMount() {
        this.props.getLocation();
    }

    render () {
        console.log(this.props);
        const { location } = this.props;
        return (
            <div>
                <h1>Latitude: {location.latitude}</h1>
                <h1>Longitude: {location.longitude}</h1>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    location: state.userReducer
});

export default connect(
    mapStateToProps,
    { getLocation })
(Geolocation);