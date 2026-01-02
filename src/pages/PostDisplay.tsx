import CommentCard from "../components/CommentCard";
import DisplayHeader from "../components/DisplayHeader";
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";

interface Comment {
    id: number;
    name: string;
    link: string;
    description?: string;
    user_id: string;
    date_create: Date;
    user_owned: boolean;
}

const PostDisplay: React.FC = () => {
    return (
        <>
            <DisplayHeader
                name={Post.name}
                description={Post.description}
                user_id={Post.user_id}
                user_owned={Post.user_owned}
                date_create={Post.date_create}
                link={Post.link}
            />
            <Container
                maxWidth="md" // Fixed width for all cards
                sx={{
                    py: 4,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4, // Consistent spacing
                        alignItems: "center", // Center cards horizontally
                    }}
                >
                    {sampleComments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            name={comment.user_id}
                            date_create={comment.date_create}
                            user_owned={comment.user_owned}
                            description={comment.description}
                        />
                    ))}
                </Box>
            </Container>
        </>
    );
};

const Post = {
    id: 1,
    name: "Getting Started with React",
    link: "/posts/react-basics",
    description:
        "A comprehensive guide to React fundamentals including components, props, state, and hooks. Perfect for beginners who want to build modern web applications.",
    user_id: "alex_johnson",
    date_create: new Date("2024-01-15"),
    user_owned: false,
};

const sampleComments: Comment[] = [
    {
        id: 1,
        name: "Alex Johnson",
        link: "https://example.com/comment/1",
        description:
            "This is a fantastic insight! I completely agree with your perspective on sustainable development. The points about renewable energy integration are particularly compelling.",
        user_id: "user_12345",
        date_create: new Date("2023-11-20T14:30:00"),
        user_owned: true,
    },
    {
        id: 2,
        name: "Sam Rivera",
        link: "https://example.com/comment/2",
        description:
            "Interesting analysis. However, I think there might be some overlooked factors in the methodology. Have you considered the recent study published in the Journal of Economics last month?",
        user_id: "user_67890",
        date_create: new Date("2023-11-18T09:15:00"),
        user_owned: false,
    },
    {
        id: 3,
        name: "Taylor Smith",
        link: "https://example.com/comment/3",
        description:
            "Thanks for sharing this detailed explanation. It really helped clarify the core concepts for me. The examples you provided made the abstract theory much more tangible.",
        user_id: "user_54321",
        date_create: new Date("2023-11-15T16:45:00"),
        user_owned: false,
    },
    {
        id: 4,
        name: "Jordan Lee",
        link: "https://example.com/comment/4",
        description:
            "While I understand your point, I have to respectfully disagree on the implementation timeline. The infrastructure requirements alone would take at least 3-5 years to properly establish.",
        user_id: "user_98765",
        date_create: new Date("2023-11-12T11:20:00"),
        user_owned: true,
    },
    {
        id: 5,
        name: "Morgan Chen",
        link: "https://example.com/comment/5",
        description:
            "Great work! This aligns perfectly with my recent research. Would you be interested in collaborating on a more comprehensive paper exploring these concepts further?",
        user_id: "user_13579",
        date_create: new Date("2023-11-10T08:00:00"),
        user_owned: false,
    },
];

export default PostDisplay;
