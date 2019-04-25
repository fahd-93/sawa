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
            <div className="row">
                <div className="col-25">
                    <label>Type of Volunteers:</label>
                </div>
                <div className="col-75">
                    <select name="type_of_volunteers"
                            className="custom-select"
                            ref={this.typeOfVolunteersRef}>
                        <option defaultValue>
                            Choose Type of Volunteer Your Campaign Needs
                        </option>
                        {this.state.volunteerType.map(( item, i ) => (
                            <option key={i}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}

export default VolunteerType;