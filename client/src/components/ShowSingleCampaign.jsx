import React, { Component } from 'react';
import { connect } from "react-redux";
// import UserCards from './UserCards'

import axios from 'axios';




class ShowSingleCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const id = this.props.campaign_id;
        axios.get(`http://localhost:4000/api/users/campaign/${id}`)
            .then(res => {
                console.log('Resssss', res);
                this.setState({
                    categories: res.data.categories,
                    title: res.data.title,
                    created_by: res.data.created_by,
                    description: res.data.description,
                    created_at: res.data.created_at,
                    //campaign_location: res.data.campaign_location,
                    country_code: res.data.country_code,
                    num_of_volunteers: res.data.num_of_volunteers,
                    type_of_volunteers: res.data.type_of_volunteers,
                    start_date: res.data.start_date,
                    materials: res.data.materials,
                    end_date: res.data.end_date,
                    image: res.data.image

                })
            })
            .catch(err => console.log(err))
    }

    render() {
        if (this.props.campaign_id === undefined) {
            return <div>no data</div>
        }

        // const campaign = this.props.campaign;
        console.log(this.props.campaign_id);

        return (
            <div className="cam-container">
            <div className="row">
            <h1 className="cam-singleheader">Title: {this.state.title}</h1>
            
            </div>
            <div className="row">
            <div className="col-9 cam-singlecontainer">
                <img className="singlecampimage" src={`http://localhost:4000/uploads/${this.state.image}`} alt=""/>
               <p>Category: {this.state.categories} </p>
                
                <p>Created by: {this.state.created_by} </p>
                <p className="description">Description: {this.state.description} </p>
               <hr/>

                <p>Created the {this.state.created_at}</p>
                {/* <p>Located: {this.state.campaign_location}</p> */}
                <p>Country code: {this.state.country_code}</p>
                <p>Number of volunteers: {this.state.num_of_volunteers}</p>
                <p>Type of volunteers: {this.state.type_of_volunteers}</p>
                <p>Start date: {this.state.start_date}</p>
                <p>Materials: {this.state.materials}</p>
                <p>End date: {this.state.end_date}</p>    
                </div>

                <div className="col bg-info">
                {/*  <UserCards /> */}
                <ul className="list-unstyled">
                <li className="media">
                    <img src="" className="mr-3" alt="..." />
                 <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                 </div>
  </li>
                </ul>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    campaign_id: state.campaign.campaign_id
});

export default connect(mapStateToProps, null)(ShowSingleCampaign);