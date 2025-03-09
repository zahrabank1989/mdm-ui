import React from 'react';
import {Typography, Box} from '@mui/material';
import CenteredImageBox from './CenteredImageBox'; // Import the CenteredImageBox component
import IconLableBox from   "./IconLableBox";
import { useTranslation } from 'react-i18next';

const IconsRow = ({
                     leftBoxStyle = {},
                     rightBoxStyle = {},
                     sx,
                 }) => {

    const {i18n, t} = useTranslation();
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "fa" : "en"); // Toggle between languages
    };

    const EllipseImage = '/login/Ellipse.svg';
    const GoogleImage = '/login/google.svg';
    const CallImage = '/login/call-calling.svg';
    const MessagesImage = '/login/messages.svg';
    const DocImage = '/login/document-text.svg';
    const GlobalImage = '/login/global.svg';
    const leftIcon = {
        backgroundImage: EllipseImage,
        iconImage: GlobalImage,
        boxSize: 47,
        iconSize: 24,
        sx: {}
    };
    const rightIcons = [
        {
            backgroundImage: EllipseImage,
            iconImage: DocImage,
            boxSize: 47,
            iconSize: 24,
            sx: {}
        },
        {
            backgroundImage: EllipseImage,
            iconImage: MessagesImage,
            boxSize: 47,
            iconSize: 24,
            sx: {}
        },
        {
            backgroundImage: EllipseImage,
            iconImage: CallImage,
            boxSize: 47,
            iconSize: 24,
            sx: {}
        },
        {
            backgroundImage: EllipseImage,
            iconImage: GoogleImage,
            boxSize: 47,
            iconSize: 24,
            sx: {}
        },
    ];
    return (
        <Box
            sx={{
                display: 'flex', // Flexbox to align two inner boxes side by side
                width: '100%', // Full width for the parent box
                ...sx,
            }}
        >
            {/* Left Box */}
            <Box
                sx={{
                    display: 'flex', // Use flexbox for positioning
                    justifyContent: 'flex-start', // Align the box to the left
                    alignItems: 'center', // Center vertically
                    width: '50%',
                    ...leftBoxStyle, // Override or extend styles via props
                }}
            >
                <IconLableBox
                    imageSrc={GlobalImage}
                    text={t('lan')}
                    iconSize={24}
                    onClick={changeLanguage} // Pass event handler
                />
            </Box>
            {/* Right Box */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    ...rightBoxStyle, // Override or extend styles via props
                }}
            >
                {rightIcons.map((icon, index) => (
                    <CenteredImageBox
                        key={index}
                        {...icon}
                        sx={{mr: index < rightIcons.length - 1 ? 1 : 0, ...icon.sx}}
                    />
                ))}
            </Box>
        </Box>
    );
};
export default IconsRow;
