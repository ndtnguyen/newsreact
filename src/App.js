import React from 'react';
import './App.css';
import Home from './home-page/home';
import Header from './components/Header/header';
import NavMenu from './components/Nav/navMenu';

class App extends React.Component {

  render() {
    return (
      <div className="container">  
        <div className="row">
          <Header/> 
        </div>
        <div className="row">
          <NavMenu/>
        </div>
        <div className="row">
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
