import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

interface DisplayBoxProps {
    name: string;
    link: string;
    description?: string;
    user_id: string;
    date_create: Date;
    user_owned: boolean;
}

const DisplayCard: React.FC<DisplayBoxProps> = ({ name, link, description, user_id, date_create, user_owned }) => {
    return (
        <React.Fragment>
            <CardContent sx={{ p: 2, pb: 1 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 1,
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Link
                            to={link}
                            style={{
                                textDecoration: "none",
                                color: "black",
                                display: "block",
                            }}
                        >
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    fontWeight: "bold", // BOLD text
                                    fontSize: "1.1rem", // Custom smaller font size
                                    lineHeight: 1.2, // Tighter line spacing
                                    mb: 0.5, // Reduced margin bottom
                                }}
                            >
                                {name}
                            </Typography>
                        </Link>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                            Created by {user_id}
                            <br />
                            Created on{" "}
                            {date_create.toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric",
                            })}
                        </Typography>
                    </Box>
                    <CardActions sx={{ p: 0, m: 0 }}>
                        <IconButton aria-label="add to favorites" size="small">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" size="small">
                            <ShareIcon />
                        </IconButton>
                        {user_owned && (
                            <IconButton aria-label="delete" size="small">
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </CardActions>
                </Box>
                {description && (
                    <Box
                        sx={{
                            mt: "auto",
                            pt: 1.5,
                            borderTop: 1,
                            borderColor: "divider",
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                lineHeight: 1.4,
                            }}
                        >
                            {description}
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </React.Fragment>
    );
};

export default DisplayCard;
