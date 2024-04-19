import React from 'react';

const Welcome = ({ handleLogout }) => {
    return (
        <div>
            <h3>Welcome! You've successfully logged in.</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Welcome;