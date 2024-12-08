// src/components/Login.tsx
import React from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const CustomUserIcon = '/login/profile.svg'; // Path to profile.svg in public/login
const CustomLockIcon = '/login/shield.png'; // Path to lock.png in public/login

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Login submitted");
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', backgroundImage: 'url(/path/to/your/background-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Box sx={{ mt: 8, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2, padding: 3, boxShadow: 3 }}>
                <Typography component="h1" variant="h5" align="center">
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
                            autoComplete="username"
                            autoFocus
                            placeholder="Please Enter user name"
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
                            type="password"
                            autoComplete="current-password"
                            placeholder="****"
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
     //   <Box>
//i dont want backgroundImage,  i just want to have an image in the footer part of main Container
    //    </Box>
        </Container>
    );
};

export default Login;
