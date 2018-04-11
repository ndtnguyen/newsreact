import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Toolbar, Button, Drawer } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    background: "#516235",
    height: "100%"
  },
  main : {
    textAlign: "center"
  },

}
class Home extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="home">  
        heelo
      </div>
    );
  }
}

export default withStyles(styles)(Home);
