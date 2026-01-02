import TopicBox from "../components/TopicElem";
import TopicsHeader from "../components/TopicsHeader";
import React from "react";
import { Box, Container } from "@mui/material";

const Topics = [
    {
        name: "How to learn React?",
        topic_link: "/topics/1",
        user_id: "alice123",
        date_create: new Date("2024-01-15"),
        user_owned: false,
    },
    {
        name: "TypeScript vs JavaScript",
        topic_link: "/topics/2",
        user_id: "bob_dev",
        date_create: new Date("2024-01-20"),
        user_owned: true,
    },
    {
        name: "Best UI libraries 2024",
        topic_link: "/topics/3",
        user_id: "charlie_ui",
        date_create: new Date("2024-01-25"),
        user_owned: false,
    },
    {
        name: "State management comparison",
        topic_link: "/topics/4",
        user_id: "alice123",
        date_create: new Date("2024-01-28"),
        user_owned: true,
    },
    {
        name: "React performance tips",
        topic_link: "/topics/5",
        user_id: "david_perf",
        date_create: new Date("2024-02-01"),
        user_owned: false,
    },
];

const Home: React.FC = () => {
    return (
        <>
            <TopicsHeader />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh",
                        py: 4,
                    }}
                >
                    {Topics.map((topic) => (
                        <TopicBox
                            key={topic.topic_link}
                            name={topic.name}
                            topic_link={topic.topic_link}
                            user_id={topic.user_id}
                            date_create={topic.date_create}
                            user_owned={topic.user_owned}
                        />
                    ))}
                </Box>{" "}
            </Container>
        </>
    );
};

export default Home;
