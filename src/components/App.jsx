import React from 'react';
import Login from './Login';

let isLoggedIn = false; 

const renderConditionally = () => {
    return isLoggedIn === true ? <h1>Hello</h1> : <Login />
};

const App = () => {
    return (
        <div className="container">
            {renderConditionally()}
        </div>
    );
};

export default App;