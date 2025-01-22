import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const LoginForm = ({
                       handleSubmit, // Function to handle form submission
                       textFieldStyle, // Style props for TextField

                   }) => {
    const UserIcon = '/login/profile.svg';
    const LockIcon = '/login/shield.svg';
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
                    Username
                </Typography>
                <TextField
                    {...textFieldStyle}
                    autoComplete="username"
                    placeholder="Please Enter username"
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
                    Password
                </Typography>
                <TextField
                    {...textFieldStyle}
                    type="password"
                    autoComplete="current-password"
                    placeholder="****"
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
