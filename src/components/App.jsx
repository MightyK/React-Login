import React from 'react';
import Login from './Login';

let isLoggedIn = false; 

const renderConditionally = () => {
    if (isLoggedIn) {
        return <h1>Hello</h1>
    } else {
        return <Login />;
    }
};

const App = () => {
    return (
        <div className="container">
            {renderConditionally()}
        </div>
    );
};

export default App;