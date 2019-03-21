import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getCategory } from "../redux/actions/actionCreator";

class CampaignForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         category: ''
    //     }
    // }
    handleOptions = e => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            category: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        // let category = this.state.category;
        console.log(this.props.getCategory, this.props.category);
    };

    render(){
        return(
            <div className="form-container">
                <h1 className="camp-name">Campaign Form</h1>
                <form action="/" method="post" encType="multipart/form-data">
                    <select onChange={e => this.handleOptions(e)}>
                        <option defaultValue>Choose One Category</option>
                        <option value="medical">Medical</option>
                        <option value="construction">Construction</option>
                        <option value="education">Education</option>
                    </select>

                    <br/><br/>
                    <button className='submit-btn'
                            onClick={this.onSubmit}>
                    <Link to={'/'}/>
                    Next
                    </button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    category: state.campaignReducer.category
});

export default connect( mapStateToProps, { getCategory } )(CampaignForm);