import React, { Component } from 'react';
import CampaignForm from './CampaignForm'

class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>sawa project</h1>
          <div className='flex-position'>
            <CampaignForm />
          </div>
      </div>
    );
  }
}

export default App;
