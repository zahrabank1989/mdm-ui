import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import apiService from '../services/apiService'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';

const LoginForm = ({
                       textFieldStyle, // Style props for TextField

                   }) => {
    const {t} = useTranslation();
    const UserIcon = '/login/profile.svg';
    const LockIcon = '/login/shield.svg';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const captcha = "string"; // Replace with actual captcha value as needed
        const username = "zbank";
        const password = "@Soheila1343";
        try {
            console.log('submit');
            const response = await apiService.login(username, password,captcha);
            console.log('Login successful:', response);
            localStorage.setItem('token', response.token); // Store token
          //  window.location.href = '/dashboard'; // Redirect to dashboard
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
            console.error('Login error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={UserIcon}
                        alt="User Icon"
                        style={{ marginRight: '8px' }}
                    />
                    {t('username')}
                </Typography>
                <TextField
                    {...textFieldStyle}
                    autoComplete="username"
                    placeholder="Please Enter username"

                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Box>

            {/* Password Field */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={LockIcon}
                        alt="Lock Icon"
                        style={{ marginRight: '8px' }}
                    />
                    {t('password')}
                </Typography>
                <TextField
                    {...textFieldStyle}
                    type="password"
                    autoComplete="current-password"
                    placeholder="****"

                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Box>

            {/* Submit Button */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    margin: 'auto',
                    display: 'block',
                    mb: 2,
                    width: '50%',
                }}
            >
                Sign In
            </Button>
        </form>
    );
};

export default LoginForm;
