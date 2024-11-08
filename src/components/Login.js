
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            username,
            password
        });

        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            history.push('/dashboard');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
