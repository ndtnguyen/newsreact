import React from 'react';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Register from '../register/register';

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
    },
    group: {
        display: "inline"
    }
}
class Login extends React.Component { 
    constructor() {
        super();
        this.state = {
            value: "login",
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    renderLogin = () => {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <TextField id="email" placeholder="Email Address" className={classes.textField} value={this.state.name} margin="normal"/>
                </div>
                <div>
                    <TextField id="pw" placeholder="Password" className={classes.textField} value={this.state.name} margin="normal" type="password"/>
                </div>  
                <Button variant="raised" className={classes.button}>
                    LOG IN
                </Button>     
            </div>  
        );
    }
    render() {
        const { classes } = this.props;
        return (
        <div className={classes.login}>        
                <h3>{this.state.value === "login" ? <span>Have An Account Already?</span> : <span>Get the Best of Fokus</span>}</h3>
                <div className={classes.formControl}>
                <RadioGroup aria-label="loginType" name="loginType" className={classes.group} value={this.state.value} onChange={this.handleChange}>
                    <FormControlLabel value="login" control={<Radio />} label="Log in" />
                    <FormControlLabel value="register" control={<Radio />} label="Register new account" />
                </RadioGroup>
                </div>
                {this.state.value === "login" ? this.renderLogin() : <Register/>}     
        </div>
        );
    }
}

export default withStyles(styles)(Login);
