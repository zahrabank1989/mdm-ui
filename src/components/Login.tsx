// src/components/Login.tsx
import React from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

// Define icon paths directly in the file
const CustomUserIcon = './profile.svg'; // Path to profile.svg
const CustomLockIcon = './lock.png'; // Path to lock.png

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Login submitted");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ mt: 8 }}>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={CustomUserIcon}
                                alt="User Icon"
                                style={{ marginRight: '8px', width: '24px', height: '24px' }}
                            />
                            Username
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            autoComplete="username"
                            autoFocus
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={CustomLockIcon}
                                alt="Lock Icon"
                                style={{ marginRight: '8px', width: '24px', height: '24px' }}
                            />
                            Password
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
