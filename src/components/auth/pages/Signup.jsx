import React, { useState } from 'react';
import api from '../api';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post('/auth/register', { username, password });
            setSuccess('User created successfully!');
            setError('');
        } catch (err) {
            setError(err.response.data.error);
            setSuccess('');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;