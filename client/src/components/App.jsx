import React, { Component } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import ProfilePage from './ProfilePage';






class App extends Component {

  render() {

    return (

      <Router basename="/react-auth-ui/">

        <Route exact path="/" component={SignUpForm}>
        </Route>
        <Route path="/sign-in" component={SignInForm}>
        </Route>
        <Route exact path="/profilepage" component={ProfilePage} />
      
      </Router>
    );
  }
}



export default App;
   








