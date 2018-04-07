import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
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
      <HashRouter>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
