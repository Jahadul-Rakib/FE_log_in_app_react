import React from 'react';
import LogIn from "./component/LogIn.js";
import Registration from "./component/Registration";
import './App.css';

function App() {
    return (
        <div className="App container">
            <div className="row">

                <div className="col-6 bg-info">
                    <LogIn/>
                </div>
                <div className="col-6">
                    <Registration/>
                </div>

            </div>

        </div>
    );
}

export default App;
