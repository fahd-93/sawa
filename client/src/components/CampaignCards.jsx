import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { getAllCamp } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import {  CardColumns, Card } from "react-bootstrap";





class CampaignCards extends Component{


    componentDidMount(){
        this.props.getAllCamp();
    }

    getId = e => {
        console.log('User Id', e.target.value);
    }

    


    render() {

        if (this.props.campaigns === undefined) {
            return <div>no data</div>
        }
       
        

        const campaigns = this.props.campaigns;
        
        return(
    
                    
            <CardColumns >


                            {campaigns.map(user =>

                            <Link to='/' onClink={ e => this.getId(e)} >
                        
                            <Card key={user._id}>
                            <Card.Img variant="top"src={`http://localhost:4000/uploads/${user.image}`} />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>
                                Title: {user.title}
                                </Card.Title>

                                <Card.Text style={{ color: 'black' }}>
                                Created by: {user.created_by}
                                </Card.Text>

                                <Card.Text style={{ color: 'black' }}>
                                Description: {user.description}
                                </Card.Text>

                                <Card.Text style={{ color: 'black' }}>
                                Starting:{user.start_date}
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                               
                                <small className="text-muted">Last updated:</small>
                            </Card.Footer>
                           
                            </Card>
                            </Link>
                            )}
                            
            </CardColumns>

            
        )
    }
}

function mapStateToProps(state){
    console.log('state from props CampaignCards PAGE', state.campaign.campaign);
    return {
        campaigns:  state.campaign.campaign
      };
}



export default connect( mapStateToProps, { getAllCamp })( CampaignCards );