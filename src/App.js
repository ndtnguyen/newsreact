import React from 'react';
import './App.css';
import Login from './login/login';
import AppBar from 'material-ui/AppBar';
import { Toolbar, Button, Drawer } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Header from './components/Header/header';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    background: "#516235",
  },
  navBtn: {
    float: 'right'
  },
  nav: {
    textAlign: 'right'
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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>  
        <Header/>
        <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(this.state.spacing)}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
