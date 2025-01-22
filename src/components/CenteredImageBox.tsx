import React from 'react';
import Box from '@mui/material/Box';

const CenteredImageBox = ({ backgroundImage, iconImage, boxSize = 47, iconSize = 24, sx }) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`, // Dynamically set the background image
                backgroundSize: 'cover', // Adjust the size to cover the box
                backgroundPosition: 'center', // Center the background image
                width: `${boxSize}px`, // Box width
                height: `${boxSize}px`, // Box height
                display: 'flex', // Flexbox for centering content
                alignItems: 'center', // Vertically center
                justifyContent: 'center', // Horizontally center
                ...sx,
            }}
        >
            <img
                src={iconImage} // Dynamically set the icon image
                alt="Icon"
                style={{
                    width: `${iconSize}px`, // Adjust the icon width
                    height: `${iconSize}px`, // Adjust the icon height
                }}
            />
        </Box>
    );
};

export default CenteredImageBox;
