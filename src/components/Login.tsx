// Login.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import dynamic from 'next/dynamic';

const CustomUserIcon = '/login/profile.svg';
const CustomLockIcon = '/login/shield.png';
const FooterImageLg = '/login/power-grids-and-outages-2 1.svg';
const FooterImageMd = '/login/power-grids-and-outages-md.svg';
const FooterImageSm = '/login/power-grids-and-outages-sm.svg';

const Captcha = dynamic(() => import('reactjs-captcha').then(mod => mod.Captcha), { ssr: false });

const Login: React.FC = () => {
    const [userInput, setUserInput] = useState<string>('');
    //const [captchaReady, setCaptchaReady] = useState<boolean>(false);
    const captchaRef = useRef<any>(null);
/*
    useEffect(() => {
        // Check if the CAPTCHA is ready
        if (captchaRef.current) {
            setCaptchaReady(true);
        }
    }, [captchaRef.current]);
*/
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!captchaRef.current) {
            alert('CAPTCHA is not ready. Please reload the page.');
            return;
        }

        const captchaValue = captchaRef.current.getValue();
        if (userInput === captchaValue) {
            console.log("Login submitted");
            // Handle successful login logic here
        } else {
            alert('Invalid CAPTCHA. Please try again.');
        }
    };

    return (
        <Container
            component="main"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(233, 237, 248, 1)',
                padding: 0,
                margin: 0,
                height: '100vh',
            }}
            disableGutters
            maxWidth={false}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(244, 248, 255, 1)',
                    borderRadius: 2,
                    padding: 3,
                    width: {
                        xs: '90%',
                        sm: '80%',
                        md: '60%',
                        lg: '40%',
                    },
                    maxWidth: '400px',
                    boxShadow: 1,
                    mt: 2,
                }}
            >
                <Typography component="h1" variant="h5" align="center">
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
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
                    {/* Captcha Challenge */}
                    <Box sx={{ mb: 2 }}>
                        <Captcha
                            captchaStyleName="yourFirstCaptchaStyle"
                            ref={captchaRef}
                        />
                        <label>
                            <span>Retype the characters from the picture:</span>
                            <input
                                id="yourFirstCaptchaUserInput"
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                style={{ width: '100%', marginTop: '8px' }}
                                required
                            />
                        </label>
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
            {/* Footer Image */}
            <Box>
                <picture>
                    <source media="(max-width: 600px)" srcSet={FooterImageSm} />
                    <source media="(max-width: 960px)" srcSet={FooterImageMd} />
                    <source media="(max-width: 1500px)" srcSet={FooterImageLg} />
                    <img
                        src={FooterImageLg}
                        alt="Footer"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </picture>
            </Box>
        </Container>
    );
};

export default Login;
