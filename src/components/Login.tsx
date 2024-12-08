// src/components/Login.tsx
import React from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle login logic here
        console.log("Login submitted");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ mt: 8 }}>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
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
