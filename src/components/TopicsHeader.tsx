import { Box, Typography, Container, Toolbar } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import React from "react";

const TopicsHeader = () => {
    return (
        <Box
            sx={{
                backgroundColor: "background.paper",
                borderBottom: 1,
                borderColor: "divider",
                width: "100%",
                py: 3,
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        color: "text.primary",
                    }}
                >
                    Topics
                </Typography>
            </Container>
        </Box>
    );
};

export default TopicsHeader;
