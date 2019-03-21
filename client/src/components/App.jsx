import React, { Component } from 'react';
import CampaignType from './CampaignType'

class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>sawa project</h1>
          <div className='flex-position'>
            <CampaignType />
          </div>
      </div>
    );
  }
}

export default App;
