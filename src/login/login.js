import React from 'react';
import Register from '../register/register';
import './login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            type: "login",
            email: "",
            password: "",
            isSubmitted: false
        }
    }

    handleChange = event => {
        this.setState({ type: event.target.type });
    };

    validate = () => {
        console.log('validate');
    }
    renderLogin = () => {
        let invalidEmail = !this.state.email && this.state.isSubmitted;
        let invalidPassword = !this.state.password && this.state.isSubmitted;
        return (
            <div>
                <div>
                    <input className={invalidEmail? " myinput invalid" : "myinput"} type="email  " placeholder="Email Address" onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="text-left">
                    {invalidEmail ? <span className="error-msg">Email is invalid</span> : null}
                </div>
                <div>
                    <input className={invalidPassword? "myinput invalid" : "myinput"} type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <div className="text-left">
                    {!this.state.password && this.state.isSubmitted ? <span className="error-msg">Password is invalid</span> : null}
                </div>
                <div>
                    <button className="login-button" type="button" onClick={() => this.setState({ isSubmitted: true })}>LOG IN</button>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="login">
                <div className="inline-block">
                    <div className="title">
                        {this.state.type === "login" ? "Have An Account Already?" : "Get the Best of Fokus"}
                    </div>
                    <br />
                    <div>
                        <div className="align-left">
                            <input type="radio" name="login" value="option1" />
                            <label htmlFor="radio1">
                                Login
                                </label>
                        </div>
                        <div className="align-right">
                            <input type="radio" name="login" />
                            Register new account
                    </div>
                    </div>
                    {this.state.type === "login" ? this.renderLogin() : <Register />}
                </div>
            </div>
        );
    }
}

export default Login;
