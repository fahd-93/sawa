import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { addInputs } from "../redux/actions/actionCreator";


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

    handelInputs = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        Object.keys(this.state).forEach( (index) => {
            formData.append(index, this.state[index]);
        });
        console.log(this.state);
        this.props.addInputs(this.state, formData);
    };

    render(){
        return(
            <div className="form-container">
                <div className="flex-position">
                    <form onChange={ e => this.handelInputs(e)}>
                        <br/>
                        <label>Campaign Name:</label>
                        <input type="text"
                               name="title"
                               placeholder="Think of a good name for your campaign"/>
                        <br/><br/>
                        <label>Campaign Description:</label>
                        <textarea name="description"
                                  cols="50" rows="8"
                                  placeholder="Remember to give an overview of your campaign.
                                  You better give some context why and for what your creating this campaign."
                        />
                        <br/><br/>
                        <label>How Many volunteers the campaign needs?</label>
                        <input name="num_of_volunteers"
                               type="number"/>
                        <br/><br/>
                        <label>What Type of help the campaign needs?</label>
                        <select name="type_of_volunteers"
                                type="number">
                            <option defaultValue>Choose Type of help your campaign needs:</option>
                            {this.ConstructionTypeList
                                .map( (item, index) => {
                                return(
                                    <option value={item}
                                            key={index}>
                                        {item}
                                    </option>
                                )
                            })}
                        </select>
                        <label> Start Date:</label>
                        <input type="date" name="start_date"/>
                        <br/><br/>
                        <label> End Date:</label>
                        <input type="date" name="end_date"/>
                        <br/>

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

export default connect(
    null,
    { addInputs })
( ConstructionForm );