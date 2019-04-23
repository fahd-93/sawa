import React, { Component } from 'react';
import { connect } from 'react-redux';





class ShowSingleCampaign extends Component{

    render() {
        console.log(this.props.campaign)
        return(
    
                    
           <div>
               got hier
           </div>

            
        )
    }
}


const mapStateToProps = state => ({
    campaign: state.campaign
})


export default connect( mapStateToProps , null)(ShowSingleCampaign) ;