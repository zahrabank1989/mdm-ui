// src/components/Login.tsx
import React from 'react';
import {Button, TextField, Container, Typography, Box} from '@mui/material';

const CustomUserIcon = '/login/profile.svg'; // Path to profile.svg in public/login
const CustomLockIcon = '/login/shield.png'; // Path to lock.png in public/login
const FooterImageLg = '/login/power-grids-and-outages-2 1.svg'; // Path to your footer image
const FooterImageMd = '/login/power-grids-and-outages-md.svg'; // Path to your footer image
const FooterImageSm = '/login/power-grids-and-outages-sm.svg'; // Path to your footer image
const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Login submitted");
    };
    return (
        <Container
            component="main"
            sx={{
                height: '100vh', // Full viewport height
                display: 'flex',
                flexDirection: 'column', // Stack children vertically
                alignItems: 'center', // Center horizontally
                justifyContent: 'center', // Center vertically
                backgroundColor: 'rgba(233, 237, 248, 1)',
                padding: 0,
                margin: 0,
            }}
            disableGutters
            maxWidth={false}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0, 248, 255, 1)',
                    borderRadius: 2,
                    padding: 3,
                    width: {
                        xs: '80%',  // 90% width on extra small screens
                        sm: '70%',   // 70% width on small screens
                        md: '50%',   // 50% width on medium screens
                        lg: '40%',   // 40% width on large screens
                    },
                    maxWidth: '400px', // Optional: Set a maximum width for larger screens
                    boxShadow: 1, // Optional: Add shadow for better visibility

                }}
            >
                <Typography component="h1" variant="h5" align="center">
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{mb: 2}}>
                        <Typography variant="body1" sx={{display: 'flex', alignItems: 'center'}}>
                            <img
                                src={CustomUserIcon}
                                alt="User Icon"
                                style={{marginRight: '8px', width: '24px', height: '24px'}}
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
                    <Box sx={{mb: 2}}>
                        <Typography variant="body1" sx={{display: 'flex', alignItems: 'center'}}>
                            <img
                                src={CustomLockIcon}
                                alt="Lock Icon"
                                style={{marginRight: '8px', width: '24px', height: '24px'}}
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
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                </form>
            </Box>
            {/* Footer Image */}
            <Box
                sx={{
                    position: 'absolute', // Position it at the bottom
                    bottom: 0, // Adjust as necessary
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 10,
                }}
            >
                <picture>
                    <source media="(max-width: 600px)" srcSet={FooterImageSm}/>
                    <source media="(max-width: 960px)" srcSet={FooterImageMd}/>
                    <img
                        src={FooterImageLg}
                        alt="Footer"
                        style={{maxWidth: '100%', height: 'auto'}} // Responsive image
                    />
                </picture>


            </Box>
        </Container>);
};
export default Login;
