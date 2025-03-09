import React from 'react';
import {Container, Typography, Box} from '@mui/material';
import IconsRow from './IconsRow'; // Import your IconsRow component
import LoginForm from './LoginForm'; // Import the LoginPageForm component
import Footer from './Footer'; // Import the Footer component
import { useTranslation } from 'react-i18next';

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
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
};

const LoginPage: React.FC = () => {
    const FarabLogoEn = '/Login/farab_logo_en.svg';
    const FarabLogoFa = '/Login/farab_logo_fa.svg';
    const { i18n, t } = useTranslation();
    const isEnglish = i18n.language === "en"; // Check current language

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
                <img
                    src={isEnglish ? FarabLogoEn : FarabLogoFa}
                    alt="Farab Icon"
                    style={{ height: '84px', width: 'auto' }} // Fixed height, auto width
                />
                <LoginForm
                    textFieldStyle={{
                        margin: 'normal',
                        required: true,
                        fullWidth: true,
                    }}
                />
                <IconsRow
                    sx={{mt: 3}}
                />
            </Box>
            <Footer/>
        </Container>
    );
};
export default LoginPage;
