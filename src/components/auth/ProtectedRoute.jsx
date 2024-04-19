import React, { useState, useEffect } from 'react';
import api from './api';

const ProtectedRoute = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
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
            <h2>Protected Route</h2>
            {error && <p>{error}</p>}
            {data && <p>{data.message}</p>}
        </div>
    );
};

export default ProtectedRoute;