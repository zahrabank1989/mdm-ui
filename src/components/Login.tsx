import React from 'react';
import {Container, Typography, Box} from '@mui/material';
import IconBox from './IconBox'; // Import your IconBox component
import LoginForm from './LoginForm'; // Import the LoginForm component
import Footer from './Footer'; // Import the Footer component





const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(233, 237, 248, 1)',
    padding: 0,
    margin: 0,
    height: '100vh',
};
const boxStyle = {
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
};

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add logic to handle form submission
    };
    return (
        <Container
            component="main"
            sx={containerStyle}
            disableGutters
            maxWidth={false}
        >
            <Box sx={boxStyle}>
                <Typography component="h1" variant="h5" align="center">
                    Sign In
                </Typography>
                <LoginForm
                    textFieldStyle={{
                        margin: 'normal',
                        required: true,
                        fullWidth: true,
                    }}
                />
                <IconBox
                    sx={{mt: 3}}
                    // leftBoxStyle={{backgroundColor: 'red'}} // Optional: Custom styles for left box
                    // rightBoxStyle={{backgroundColor: 'blue'}} // Optional: Custom styles for right box
                />
            </Box>
            <Footer/>
        </Container>
    );
};
export default Login;
