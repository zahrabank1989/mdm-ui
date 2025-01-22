import React from 'react';
import { Box } from '@mui/material';
import CenteredImageBox from './CenteredImageBox'; // Import the CenteredImageBox component

const IconBox = ({
                     leftBoxStyle = {},
                     rightBoxStyle = {},
                     sx,
                 }) => {
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
        sx:{}
    };

    const rightIcons = [
        {
            backgroundImage: EllipseImage,
            iconImage: DocImage,
            boxSize: 47,
            iconSize: 24,
            sx:{}
        },
        {
            backgroundImage: EllipseImage,
            iconImage: MessagesImage,
            boxSize: 47,
            iconSize: 24,
            sx:{}
        },
        {
            backgroundImage: EllipseImage,
            iconImage: CallImage,
            boxSize: 47,
            iconSize: 24,
            sx:{}
        },
        {
            backgroundImage: EllipseImage,
            iconImage: GoogleImage,
            boxSize: 47,
            iconSize: 24,
            sx:{}
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
                <CenteredImageBox {...leftIcon} />
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
                        sx={{ mr: index < rightIcons.length - 1 ? 1 : 0, ...icon.sx }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default IconBox;
