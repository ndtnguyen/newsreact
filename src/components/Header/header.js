import React from 'react';
import Login from '../../login/login';
import AppBar from 'material-ui/AppBar';
import { Toolbar, Button, Drawer } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = {
  appbar: {
    width: "100%",
  },
  logo : {
    textAlign : "center"
  },
  login : {
    color: "#F50057",
    fontWeight: "bold"
  },
  textCenter: {
    width: "100%",
    height: "100%",
    verticalAlign: "center"
  }

}
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
        isOpen : false
      }
  }

  toggleDrawer = (state) => () => {
    this.setState({ isOpen: state });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.appbar}>
        <Grid item xs={2} >
          <Button className={classes.login} onClick={this.toggleDrawer(true)} color="inherit">Sign In/Register</Button>
        </Grid>
        <Grid item xs={8} className={classes.logo}><img src="assets/logo.png" alt="logo"/></Grid>       
        <Grid item xs={2} >
          <div className={classes.textCenter}>Hi, Samson</div>
        </Grid>
       <Drawer anchor="top" open={this.state.isOpen} onClose={this.toggleDrawer(false)}>            
          <Login/>
        </Drawer>
      </Grid>
    );
  }
}

export default withStyles(styles)(Header);
