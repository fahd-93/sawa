import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class DisplayCampaign extends Component{
    constructor(props){
        super(props);
        this.state = {
            campaigns: null
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:4000/api/campaign/construction/list')
            .then( res => {
                console.log(res.data);
                res.data.map( campaigns => {
                    console.log( `campaign ${campaigns._id}`, campaigns );
                    this.setState({
                        campaigns: campaigns
                    })
                })
            })
            .catch( error => {
                console.log(error);
            })
    }


    render(){
        const list = () => {
            if(this.state.campaigns !== null) {
                console.log( this.state.campaigns );
                return Object.keys(this.state.campaigns).map( item => (

                    <div>
                        <h1> title: {item._id}</h1>
                    </div>

                ));

            }
        };
        return(
            <div>
                <div> {list()} </div>
            </div>
        )
    }

}


export default connect(null, null)(DisplayCampaign);