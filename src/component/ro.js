import React, {Component} from 'react';
import LogIn from "./LogIn";
import Home from "./Home";
import Registration from "./Registration";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class ro extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>

                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} component={LogIn}/>
                        <Route path={"/home"} component={Home}/>
                        <Route path={"/reg"} component={Registration}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default ro;
