import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import './App.css';
/**
 * 
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
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
