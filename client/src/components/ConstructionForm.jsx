import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { saveCampaign } from "../redux/actions/actionCreator";


class ConstructionForm extends Component {
    constructor(props) {
        super(props);
        this.userImageRef = React.createRef();
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.numOfVolunteersRef = React.createRef();
        this.typeOfVolunteersRef = React.createRef();
        this.startDateRef = React.createRef();
        this.endDateRef = React.createRef();
        this.videoRef = React.createRef();
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

    state = {
       title: '',
       description:'',
       num_of_volunteers:'',
       type_of_volunteers:'',
       start_date:'',
       end_date:''
    }

    handelInputs = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     let formData = new FormData();
    //     Object.keys(this.state).forEach( (index) => {
    //        console.log('this.state NDEX from handelsubmit', index);
    //         formData.append(index, this.state[index]);
    //     });
    //     this.props.saveCampaign(this.state, formData);
    // };

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        
        formData.set("title", this.state.title);
        formData.set("description", this.state.description);
        formData.set("num_of_volunteers", this.state.num_of_volunteers);
        formData.set("type_of_volunteers", this.state.type_of_volunteers);
        formData.set("start_date", this.state.start_date);
        formData.set("end_date", this.state.end_date);
        formData.append("image", this.userImageRef.current.files[0]);
        //formData.append("video", this.videoRef.current.files[0]);

        this.props.saveCampaign(formData);
        
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
                                ref={this.descriptionRef}
                                  cols="50" rows="8"
                                  placeholder="Remember to give an overview of your campaign.
                                  You better give some context why and for what your creating this campaign."
                        />
                        <br/><br/>
                        <label>How Many volunteers the campaign needs?</label>
                        <input name="num_of_volunteers"
                                ref={this.numOfVolunteersRef}
                               type="number"/>
                        <br/><br/>
                        <label>What Type of help the campaign needs?</label>
                        <select name="type_of_volunteers"
                        ref={this.typeOfVolunteersRef}
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
                        <input type="date" name="start_date" ref={this.startDateRef}/>
                        <br/><br/>
                        <label> End Date:</label>
                        <input type="date" name="end_date"  ref={this.endDateRef}/>
                        <br/>

                        <label> Upload Image:</label>
                        <input  ref={this.userImageRef}
                     type="file"
                     name="userImageRef" />

                        <label> Upload Video:</label>
                        <input type="file" name="videoRef" ref={this.videoRef}/>
                        <input type="submit"
                                onClick={ e => this.handleSubmit(e)} />
                        </form>





            
                    {/*<form onChange={ e => this.handelInputs(e)}>
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
                        <input  name="image" type="file" />

                        <label> Upload Video:</label>
                        <input type="file" name="video"/>
                        <input type="submit"
                                onClick={ e => this.handleSubmit(e)} />
                        </form>*/}
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { saveCampaign })( ConstructionForm );