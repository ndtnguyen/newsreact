import React from 'react';
import Login from '../../login/login';
import { Button, Drawer } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import './header.css';

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
  },
  userInfo : {
    textAlign: "right"
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 login">
            <Button className={classes.login} onClick={this.toggleDrawer(true)} color="inherit">Sign In/Register</Button>
          </div>
          <div className="col-lg-8 col-md-8 logo">
          <img src="assets/logo.png" alt="logo"/>
          </div>
          <div className="col-md-2 user">
          <div className={classes.userInfo}>Hi, Samson</div>
          </div>
          <Drawer anchor="top" open={this.state.isOpen} onClose={this.toggleDrawer(false)}>            
            <Login/>
          </Drawer>
        </div>
      </div>       
    );
  }
}

export default withStyles(styles)(Header);
