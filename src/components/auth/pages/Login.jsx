import React, { useState } from 'react';
import api from '../api';
import Welcome from './Welcom.jsx';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/auth/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setIsLoggedIn(true);
            setError('');
        } catch (err) {
            setError(err.response.data.error);
            setIsLoggedIn(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            {isLoggedIn ? (
                <Welcome handleLogout={handleLogout} />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};
export default Login;