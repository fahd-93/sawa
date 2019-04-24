import React, { Component } from 'react';
import { connect } from "react-redux";
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
                console.log('Resssss', res)
                this.setState({
                    categories: res.data.categories,
                    title: res.data.title,
                    created_by: res.data.created_by,
                    description: res.data.description,
                    created_at: res.data.created_at,
                    campaign_location: res.data.campaign_location,
                    country_code: res.data.country_code,
                    num_of_volunteers: res.data.num_of_volunteers,
                    type_of_volunteers: res.data.type_of_volunteers,
                    start_date: res.data.start_date,
                    materials: res.data.materials,
                    end_date: res.data.end_date,
                    image: res.data.image,
                    video: res.data.video

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
            <div>
                {this.props.campaign_id}
                <h1> Title: {this.state.title} </h1>
                <p> type_of_volunteers: {this.state.type_of_volunteers} </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
                <p> type_of_volunteers: {this.state.type_of_volunteers}rrrrr </p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    campaign_id: state.campaign.campaign_id
})

export default connect(mapStateToProps, null)(ShowSingleCampaign);