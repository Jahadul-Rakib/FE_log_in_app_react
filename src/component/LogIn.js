import React, {Component} from 'react';
import {Button, FormGroup, FormControl, label} from "react-bootstrap";
import axios from "axios";
//import { Redirect } from 'react-router';
import {Redirect} from "react-router-dom";
import Home from "./Home";
import style from "./LogIn.css"

class LogIn extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            getData: "",
            login: false
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/login', {
            username: this.state.email,
            password: this.state.password
        }).then((res) => {
            this.setState({getData: res.data});
            console.log(this.state.getData);
            this.checkToekn(res);
            return <Redirect to={{pathname: '/home', state: {token: this.state.getData}}}/>
        }).catch((error) => {
            console.log(error)
        });
    }

    checkToekn(res) {
        var token = res.data.toString();
        if (token.startsWith("Bearer ")) {
            return this.setState({login: false})
        }return this.setState({login: true})
    }

    render() {
        if (this.state.login) {
            return <Home/>;
        }

        return (

            <div>
                <span>{this.getData}</span>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <label>Email</label>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.email}
                                onChange={e => this.setState({email: e.target.value})}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <label>Password</label>
                            <FormControl
                                value={this.password}
                                onChange={e => this.setState({password: e.target.value})}
                                type="password"
                            />
                        </FormGroup>
                        <Button block type="submit">
                            Login
                        </Button>
                    </form>
                </div>

                {/*<Button type="submit" onClick={this.handle}>Registration</Button>*/}
            </div>
        );
    }
}

export default LogIn;
