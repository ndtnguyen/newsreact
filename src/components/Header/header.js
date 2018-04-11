import React from 'react';
import Login from '../../login/login';
import AppBar from 'material-ui/AppBar';
import { Toolbar, Button, Drawer } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = {
  appbar: {
    background: "#161616",
  },
  nav: {
    textAlign: 'right'
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
        <AppBar position="absolute" className={classes.appbar}>
        <Toolbar className={classes.nav}>
          <Button onClick={this.toggleDrawer(true)} color="inherit">Sign In</Button>
          <Drawer anchor="top" open={this.state.isOpen} onClose={this.toggleDrawer(false)}>            
              <Login/>
          </Drawer>
        </Toolbar>
      </AppBar>             
    );
  }
}

export default withStyles(styles)(Header);
