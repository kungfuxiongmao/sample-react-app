import { Card, CardContent, CardActions, Typography, IconButton, Box, Stack, Divider } from "@mui/material";
import { Delete as DeleteIcon, FavoriteBorder as LikeIcon, Favorite as LikedIcon } from "@mui/icons-material";
import React from "react";

interface CommentCardProps {
    id?: number;
    name?: string;
    date_create?: Date;
    description?: string;
    user_owned?: boolean;
    isLiked?: boolean;
}

const CommentCard: React.FC<CommentCardProps> = ({
    id = 1,
    name = "John Doe",
    date_create = "2023-11-15",
    description = "This is an example comment. It provides valuable insight on the topic being discussed.",
    user_owned = true,
    isLiked = false,
}) => {
    const formattedDate = new Date(date_create).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                mb: 2,
                "&:hover": {
                    boxShadow: 1,
                },
            }}
        >
            <CardContent sx={{ pb: 1 }}>
                {/* Header with user info and delete button */}
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1.5 }}>
                    <Box>
                        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                            {name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {formattedDate}
                        </Typography>
                    </Box>

                    {user_owned && (
                        <IconButton
                            size="small"
                            aria-label="Delete comment"
                            sx={{
                                color: "error.main",
                                opacity: 0.7,
                                "&:hover": { opacity: 1 },
                            }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    )}
                </Stack>

                {/* Comment text */}
                <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                    }}
                >
                    {description}
                </Typography>
            </CardContent>

            <Divider sx={{ mx: 2 }} />

            {/* Actions - Like button */}
            <CardActions sx={{ px: 2, py: 1 }}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <IconButton
                        size="small"
                        aria-label="Like comment"
                        sx={{
                            color: isLiked ? "error.main" : "action.active",
                            "&:hover": {
                                color: isLiked ? "error.dark" : "error.light",
                            },
                        }}
                    >
                        {isLiked ? <LikedIcon fontSize="small" /> : <LikeIcon fontSize="small" />}
                    </IconButton>
                    <Typography variant="caption" color="text.secondary">
                        Like
                    </Typography>
                </Stack>
            </CardActions>
        </Card>
    );
};

export default CommentCard;
