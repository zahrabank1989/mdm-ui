import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomBox = ({ imageSrc, text ,iconSize}) => {

    return (
        <Box
            sx={{
                backgroundColor: '#E9EDF8',
                backgroundSize: 'cover', // Adjust the size to cover the box
                backgroundPosition: 'center', // Center the background image
                width: '60px', // Box width
                height: '40px', // Box height
                borderRadius: '4px', // Add the border radius
                display: 'flex', // Flexbox for centering content
                alignItems: 'center', // Vertically center
                justifyContent: 'center', // Horizontally center
            }}
        >
            <img
                src={imageSrc} // Dynamically set the icon image
                alt="Icon"
                style={{
                    width: `${iconSize}px`, // Adjust the icon width
                    marginRight: '8px', // Add space between the image and the text
                }}
            />
            <Typography variant="h6" component="div"
                        sx={{
                            color: '#318CC1', // Set the color
                            fontWeight: 400,
                            fontSize: '1rem',
                            lineHeight: '1.5rem',
                        }}>
                {text}
            </Typography>
        </Box>
    );
};

export default CustomBox;
