import React, {Component} from 'react';
import registration from './Registration.css'
import axios from "axios";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            password: "",
            roles: "",
            getData: ""
        }
    }

    saveRegistration = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/adduser', {
            userName: this.state.email,
            userPassword: this.state.password,
            userEmail: this.state.email,
            userPhone: this.state.phone,
            role: [this.state.roles]
        }).then((res) => {
            this.setState({getData: res.data});
            console.log(res)
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <div>
                <div style={{width: 600, marginTop: 40}}>
                    <form onSubmit={this.saveRegistration}>
                        {/*<h3>Sign Up</h3>*/}
                        <div className="form-group">
                            <label>User name</label>
                            <input type="text" className="form-control" placeholder="Enter user name" value={this.name}
                                   onChange={e => this.setState({name: e.target.value})}/>
                        </div>

                        <div className="form-group">
                            <label>User Phone</label>
                            <input type="text" className="form-control" placeholder="Enter phone" value={this.phone}
                                   onChange={e => this.setState({phone: e.target.value})}/>
                        </div>

                        <div className="form-group">
                            <label>User Role</label>
                            <input type="text" className="form-control" placeholder="Enter Role" value={this.roles}
                                   onChange={e => this.setState({roles: e.target.value})}/>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" value={this.email}
                                   onChange={e => this.setState({email: e.target.value})}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                   value={this.password} onChange={e => this.setState({password: e.target.value})}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        {/*                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>*/}
                    </form>
                </div>

            </div>

        );
    }
}

export default Registration;
