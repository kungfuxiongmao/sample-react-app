import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Container,
    Chip,
    Stack,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, Link } from "react-router-dom";

interface DisplayHeaderProps {
    name: string;
    description?: string;
    user_id: string;
    date_create: Date;
    user_owned: boolean;
    link: string;
}

const DisplayHeader: React.FC<DisplayHeaderProps> = ({ name, link, description, user_id, date_create, user_owned }) => {
    const navigate = useNavigate();
    const backClick = description
        ? () => {
              navigate("/");
          }
        : () => {
              navigate(location.pathname.substring(0, location.pathname.lastIndexOf("/")));
          };

    return (
        <Box
            sx={{
                backgroundColor: "background.paper",
                borderBottom: 1,
                borderColor: "divider",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ py: 2 }}>
                    <IconButton
                        onClick={backClick}
                        aria-label="back"
                        sx={{
                            mr: 2,
                            color: "primary.main",
                            "&:hover": { backgroundColor: "action.hover" },
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>

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
                                variant="h4"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    color: "text.primary",
                                    mb: 0.5,
                                }}
                            >
                                {name}
                            </Typography>
                        </Link>

                        {/* Created by and Created on subtext */}
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                            Created by {user_id}
                            <br />
                            Created on{" "}
                            {date_create.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </Typography>

                        <Stack direction="row" spacing={1}>
                            {/*Like button, to be implemented*/}
                            {/* <IconButton 
                onClick={onLike}
                color={isLiked ? 'error' : 'default'}
                aria-label="like"
              >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                {likesCount > 0 && (
                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                    {likesCount}
                  </Typography>
                )}
              </IconButton> */}

                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>

                            {user_owned && (
                                <>
                                    <IconButton aria-label="edit" sx={{ color: "primary.main" }}>
                                        <EditIcon />
                                    </IconButton>

                                    <IconButton aria-label="delete" sx={{ color: "error.main" }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </>
                            )}
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>

            {/* Description Section */}
            {description && (
                <Box
                    sx={{
                        backgroundColor: "grey.50",
                        borderTop: 1,
                        borderBottom: 1,
                        borderColor: "divider",
                        py: 3,
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {description}
                        </Typography>
                    </Container>
                </Box>
            )}
        </Box>
    );
};

export default DisplayHeader;
