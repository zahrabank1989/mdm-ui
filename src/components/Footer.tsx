import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
    const FooterImageLg = '/login/power-grids-and-outages-2 1.svg';
    const FooterImageMd = '/login/power-grids-and-outages-md.svg';
    const FooterImageSm = '/login/power-grids-and-outages-sm.svg';
    return (
        <Box>
            <picture>
                <source media="(max-width: 600px)" srcSet={FooterImageSm} />
                <source media="(max-width: 960px)" srcSet={FooterImageMd} />
                <img
                    src={FooterImageLg}
                    alt="Footer"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </picture>
        </Box>
    );
};

export default Footer;
