import React from 'react';
import './App.css';
import Home from './home-page/home';
import Header from './components/Header/header';
import NavMenu from './components/Nav/navMenu';
import Footer from './components/Footer/footer';
import Switch from 'material-ui/Switch';
import { FormControlLabel } from 'material-ui/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      brightTheme: true
    }
  }
  render() {
    let theme = this.state.brightTheme ? '' : "dark"; 
    return (
      <div className={"app "+ theme}>
      <FormControlLabel
          control={
            <Switch
              value="checkedB"
              color="primary"
              onChange={() => this.setState({ brightTheme: !this.state.brightTheme})}
            />
          }
          label="Change theme"
        />
        <div className="container">
          <header><Header {...this.state} /></header>
          <NavMenu />
          <div><Home {...this.state}/></div>
        </div>
        <footer><Footer /></footer>
      </div>
    );
  }
}

export default App;
