import React from 'react';
import './App.css';
import Login from './login/login';
import Home from './home-page/home';
import { Button, Drawer } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Header from './components/Header/header';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { MENU } from './constants/nav';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from 'material-ui/IconButton';

const styles = {
  root: {
    background: "#516235",
    height: "100%"
  },
  main : {
    textAlign: "center"
  },
  flex: {
    flex: 1,
    background : "white"
  },
  navButton : {
    width: "10%",
    fontSize: "10pt",
    
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
        isOpen : false,
        spacing : '16'
      }
  }

  toggleDrawer = (state) => () => {
    this.setState({ isOpen: state });
  }
  renderNav () {
    
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="root">  
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid container justify="center" >
              <Grid container direction="row">
                <Header/>             
              </Grid>
              <Grid container direction="row" >
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                {MENU.map(x => <Button className={classes.navButton}>{x}</Button>)}    
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <SearchIcon />
                </IconButton>            
              </Grid>
              <Grid container direction="row" >
                <Home/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
