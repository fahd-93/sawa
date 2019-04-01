import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { saveCampaign } from "../redux/actions/actionCreator";


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

        if ( e.target.name === 'image') {
            return this.setState({
                image: e.target.files[0],
            })
        } else if(e.target.name === 'startDate' || e.target.name === 'endDate') {
            console.log("Date");

        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }

        // (e.target.name === 'image') ? this.setState({
        //     image: e.target.files[0],
        // })
        //     // : (e.target.name === 'startDate') ? this.setState({
        //     //     startDate: e.target.start_date
        //     // })
        //     : this.setState({
        //     [e.target.name]: e.target.value,
        // });

    };

    handelSubmit = (e) => {

        let formData = new FormData();
        Object.keys(this.state).forEach( (index) => {
            formData.append(index, this.state[index]);
        });
        console.log(this.state, e);
        this.props.saveCampaign( this.state, formData);

    };

    render(){
        return(
            <div className="container">
                <div className='flex-position'>
                    <div className="form-container">
                        <h1>Construction Form</h1>
                        <form onChange={ e => this.handelInputs(e)}>

                            <label>Campaign Name:</label>
                            <input type="text"
                                   name="title"
                                   placeholder="Think of a good name for your campaign"/>

                            <label>Campaign Description:</label>
                            <textarea name="description"
                                      cols="50" rows="8"
                                      placeholder="Remember to give an overview of your campaign.
                                      You better give some context why and for what your creating this campaign."
                            />
                            <label>Campaign Location:</label>
                            <select name="location">
                                <option defaultValue>Choose Location</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                            <label>How Many volunteers the campaign needs?</label>
                            <input name="num_of_volunteers"
                                   type="number"/>

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

                            <label> End Date:</label>
                            <input type="date" name="end_date"/>

                            <div className="form-container">
                                <label> Images and Video: </label>
                                <div className="form-group">
                                <label> Upload Image </label>
                                <input name="image" required
                                       type="file"
                                       id="image"
                                />
                                </div>
                            </div>
                            <Link to={"/confirm-entry"}
                                  className='submit-btn'
                                  onClick={ e => this.handelSubmit(e) }>
                                Submit
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   category: state.campaignReducer.category
});

export default connect( mapStateToProps, { saveCampaign })( ConstructionForm );