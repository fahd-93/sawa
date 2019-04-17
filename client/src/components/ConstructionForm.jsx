import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { addInputs } from "../redux/actions/actionCreator";


class ConstructionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.setState({
            category: this.props.category
        })
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
        console.log(e.target.name);

        this.setState({
            [e.target.name]: e.target.value,
        });

        console.log(this.state);

    };

    handelSubmit = ( ) => {
       /* let formData = new FormData();
        Object.keys(this.state).forEach( (index) => {
            formData.append(index, this.state[index]);
        });
        console.log(this.state);*/
        this.props.addInputs(this.state);
    };

    render(){
        return(
            <div className="container" id="campaignForm">
                <div className='flex-position'>
                    <div className="form-container">
                        <h1>Construction Form</h1>
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
                            <br/><br/>
                            <Link to="/location-form"
                                  className='submit-btn'
                                  onClick={ e => this.handelSubmit(e) }>
                                Next
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addInputs })( ConstructionForm );