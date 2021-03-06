import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './LoginButton';
import Profile from './Profile';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import  Button  from './Button';

class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the useeer is logged in, render the `BesdadstBooks` component, if they are not, render the `Login` component */}
                
                {isAuthenticated ? <BestBooks /> :<LoginButton/> }

                
              </Route>



              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">   <Profile /> </Route>
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);