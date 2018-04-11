import React from 'react';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    login : {
        textAlign: "center",
        paddingBottom: "20px"
    },
    textField : {
        width: "400px"
    },
    FormControl: {
        textAlign: "center"
    },
    button : {
        width: "150px",
        marginTop: "20px",
        marginBottom: "20px"
    }
}
class Register extends React.Component { 
    constructor() {
        super();
        this.state = {
            fname : '',
            lname : '',
            email : '', 
            pw : '', 
            repw : ''
        }
    }

    render() {
        const { classes } = this.props;
        return (
        <div className={classes.login}>        
            <TextField id="fname" placeholder="First Name" className={classes.textField} value={this.state.fname} margin="normal"/>
            <br/>
            <TextField id="lname" placeholder="Last Name" className={classes.textField} value={this.state.lname} margin="normal"/>
            <br/>
            <TextField id="email" placeholder="Email Address" className={classes.textField} value={this.state.email} margin="normal"/>
            <br/>
            <TextField id="pw" placeholder="Password" className={classes.textField} value={this.state.pw} type="password" margin="normal"/>
            <br/>
            <TextField id="repw" placeholder="Re-type Password" className={classes.textField} value={this.state.repw} type="password" margin="normal"/>
            <br/>
            <FormControlLabel control={<Checkbox checked={this.state.checkedA} value="checkedA"/>} label={<span>I've read and agreed with <b>Terms and Condition</b></span>}/>
            <br/>
            <Button variant="raised" className={classes.button}>
                SIGN UP
            </Button>            
        </div>
        );
    }
}

export default withStyles(styles)(Register);
