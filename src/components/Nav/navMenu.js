import React from 'react';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { MENU } from './../../constants/nav';
import classnames from 'classnames';

const styles = {
  navMenu: {
      width: "100%",
      textAlign: "center",
      borderBottom: "2px double #DEE2E6",
      padding: "0px"
  }
}
class NavMenu extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
        <Grid container direction="row" >
            <nav className={classnames("navbar","navbar-expand-lg",classes.navMenu)}>
                <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon />
                </Button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"> 
                        <Button >
                            <MenuIcon />
                        </Button>
                        
                        {MENU.map(x =>
                            <Button key={x} >{x}</Button>
                        )}
                        <Button >
                            <SearchIcon/>
                        </Button>
                    </ul>                                  
                </div>
            </nav>                
        </Grid>
    );
  }
}

export default withStyles(styles)(NavMenu);
 