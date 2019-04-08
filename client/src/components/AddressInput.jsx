import React, { Component } from 'react';
import AddressItem from './AddressItem'

class AddressInput extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onChange(e);
    }
    render() {
        return (
            <div className="card"><div className="card-body">
                <AddressItem label="Street" id="street"
                             value={this.props.street}
                             onChange={this.handleChange}
                             placeholder="" readonly="true" />
                <AddressItem label="City" id="city"
                             value={this.props.city}
                             onChange={this.handleChange}
                             placeholder="" readonly="true" />
                <AddressItem label="State" id="state"
                             value={this.props.state}
                             onChange={this.handleChange}
                             placeholder="" readonly="true" />
                <AddressItem label="Postal Code" id="postalCode"
                             value={this.props.code}
                             onChange={this.handleChange}
                             placeholder="" readonly="true" />
                <AddressItem label="Country" id="country"
                             value={this.props.country}
                             onChange={this.handleChange}
                             placeholder="" readonly="true" />
            </div></div>
        );
    }
}

export default AddressInput;