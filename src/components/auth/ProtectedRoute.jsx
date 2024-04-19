import React, { useState, useEffect } from 'react';
import api from './api.js';

const ProtectedRoute = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Assuming you have a protected route '/protected' that requires authentication
                // const token = localStorage.getItem('token'); // Replace with your token storage method
               const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjIyODZmZTdkNWY1MGM5OWNmMDRiOTYiLCJpYXQiOjE3MTM1MzkyMTIsImV4cCI6MTcxMzU0MjgxMn0.OfdMzy-QT7np0Hkns0UkDNkAUeKxVGQNGAa801OEQEk"
                const response = await api.get('/protected', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);
            } catch (err) {
                setError(err.response.data.error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {data && <p>{data.message}</p>}
        </div>
    );
};

export default ProtectedRoute;