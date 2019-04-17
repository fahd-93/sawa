import React, {Component} from 'react';
import axios from 'axios';

class VolunteerType extends Component {
    constructor(props){
        super(props);
        this.state = {
            volunteerType: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/api/users/campaign/types')
            .then((res) => {
                let types = res.data[0].construction_types;
                this.setState({
                    volunteerType: types
                });
            })
            .catch(error => console.log(error))
    }


    render() {
        return(
            <React.Fragment>
                <label>What Type of help the campaign needs?</label>
                <select>
                    <option defaultValue>
                        Choose Type of Volunteer you need for your Campaign:
                    </option>
                    {this.state.volunteerType.map(( item, i ) => (
                        <option key={i}>{item}</option>
                    ))}
                </select>
            </React.Fragment>
        )
    }
}

export default VolunteerType;