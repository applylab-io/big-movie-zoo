import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {CognitoUserPool} from 'amazon-cognito-identity-js';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import './App.css';

const config = {
  userPool: {
    UserPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID
  }
}

// Gets a User Pool instance
const getUserPool = () => new CognitoUserPool(config.userPool)

/**
 * 
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  componentDidMount() {
    const userPool = getUserPool();
    const user = userPool.getCurrentUser();
    console.log(user);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
