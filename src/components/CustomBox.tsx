import React from "react";
import { Box, Typography } from "@mui/material";

interface CustomBoxProps {
    imageSrc: string;
    text: string;
    iconSize: number;
    onClick?: () => void; // Optional onClick prop
}

const CustomBox: React.FC<CustomBoxProps> = ({ imageSrc, text, iconSize, onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                backgroundColor: "#E9EDF8",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "60px",
                height: "40px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer", // Better UX
            }}
        >
            <img
                src={imageSrc}
                alt="Icon"
                style={{
                    width: `${iconSize}px`,
                    marginRight: "8px",
                }}
            />
            <Typography
                variant="h6"
                component="div"
                sx={{
                    color: "#318CC1",
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default CustomBox;
