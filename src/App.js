import React from 'react';
import './App.css';
import Home from './home-page/home';
import Header from './components/Header/header';
import NavMenu from './components/Nav/navMenu';
import Footer from './components/Footer/footer';

class App extends React.Component {

  render() {
    return (
      <div className="app">
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
        <div className="row">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
