import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <Header></Header>
        <Menu></Menu>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
