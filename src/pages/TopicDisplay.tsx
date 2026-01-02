import DisplayHeader from "../components/DisplayHeader";
import PostElem from "../components/PostElem";
import { Box, Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const TopicDisplay: React.FC = () => {
    const { topicId } = useParams();
    return (
        <>
            <DisplayHeader
                name={Topic.name}
                user_id={Topic.user_id}
                date_create={Topic.date_create}
                user_owned={Topic.user_owned}
                link={Topic.link}
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
                    {samplePosts.map((post) => (
                        <PostElem
                            key={post.id}
                            name={post.name}
                            post_link={post.link}
                            user_id={post.user_id}
                            date_create={post.date_create}
                            user_owned={post.user_owned}
                            description={post.description}
                        />
                    ))}
                </Box>
            </Container>
        </>
    );
};

const Topic = {
    name: "How to learn React?",
    link: "/topics/1",
    user_id: "alice123",
    date_create: new Date("2024-01-15"),
    user_owned: false,
};

const samplePosts = [
    {
        id: 1,
        name: "Getting Started with React",
        link: "/topics/1/101",
        description: "A comprehensive guide to React fundamentals including components, props, state, and hooks. Perfect for beginners who want to build modern web applications.",
        user_id: "alex_johnson",
        date_create: new Date("2024-01-15"),
        user_owned: false,
    },
    {
        id: 2,
        name: "TypeScript Best Practices",
        link: "/topics/2/102",
        description: "Learn how to write type-safe, maintainable TypeScript code with these 20 essential practices and patterns for production applications.",
        user_id: "maria_chen",
        date_create: new Date("2024-02-22"),
        user_owned: true,
    },
    {
        id: 3,
        name: "Material-UI Styling Guide",
        link: "/topics/3/103",
        description: "Master Material-UI's sx prop and theme customization to create beautiful, consistent UIs with minimal effort. Includes advanced theming examples.",
        user_id: "design_wizard",
        date_create: new Date("2024-03-10"),
        user_owned: false,
    },
    {
        id: 4,
        name: "Web Performance Optimization",
        link: "/topics/4/104",
        description: "Techniques to improve website loading speed and responsiveness. Covers lazy loading, code splitting, caching strategies, and Core Web Vitals optimization.",
        user_id: "speed_master",
        date_create: new Date("2024-04-05"),
        user_owned: false,
    },
    {
        id: 5,
        name: "Full-Stack Authentication",
        link: "/topics/5/105",
        description: "Step-by-step tutorial for implementing secure JWT authentication with React frontend and Node.js backend. Covers refresh tokens, security headers, and OAuth integration.",
        user_id: "security_guru",
        date_create: new Date("2024-01-30"),
        user_owned: false,
    },
    {
        id: 6,
        name: "State Management Comparison",
        link: "/topics/6/106",
        description: "Redux vs Zustand vs Context API: A practical comparison of state management solutions for React applications. Includes benchmarks and real-world use cases.",
        user_id: "alex_johnson",
        date_create: new Date("2024-02-18"),
        user_owned: true,
    },
    {
        id: 7,
        name: "Responsive Design Patterns",
        link: "/topics/7/107",
        description: "Modern responsive design techniques using CSS Grid, Flexbox, and container queries. Create adaptive layouts that work on all screen sizes.",
        user_id: "responsive_ninja",
        date_create: new Date("2024-03-28"),
        user_owned: false,
    },
    {
        id: 8,
        name: "GraphQL with React",
        link: "/topics/8/108",
        description: "Building efficient data-fetching layers using GraphQL and Apollo Client. Learn about queries, mutations, subscriptions, and caching strategies.",
        user_id: "api_expert",
        date_create: new Date("2024-04-12"),
        user_owned: true,
    },
    {
        id: 9,
        name: "Testing React Applications",
        link: "/topics/9/109",
        description: "Complete guide to testing React components with Jest, React Testing Library, and Cypress. Covers unit tests, integration tests, and E2E testing strategies.",
        user_id: "qa_specialist",
        date_create: new Date("2024-02-05"),
        user_owned: false,
    },
    {
        id: 10,
        name: "Server Components Deep Dive",
        link: "/topics/10/110",
        description: "Understanding React Server Components and their impact on performance, bundle size, and SEO. Practical examples and migration strategies from client components.",
        user_id: "nextjs_pro",
        date_create: new Date("2024-03-15"),
        user_owned: true,
    },
    {
        id: 11,
        name: "Microfrontend Architecture",
        link: "/topics/11/111",
        description: "Building scalable frontend applications using microfrontend architecture. Covers Module Federation, independent deployments, and team autonomy patterns.",
        user_id: "architect_mike",
        date_create: new Date("2024-01-20"),
        user_owned: false,
    },
    {
        id: 12,
        name: "Accessibility in React",
        link: "/topics/12/112",
        description: "Making React applications accessible to all users. Learn about ARIA roles, keyboard navigation, screen reader compatibility, and WCAG compliance.",
        user_id: "inclusive_dev",
        date_create: new Date("2024-04-01"),
        user_owned: false,
    },
    {
        id: 13,
        name: "Animation with Framer Motion",
        link: "/topics/13/113",
        description: "Creating smooth, performant animations in React using Framer Motion. Tutorial covers gestures, scroll-triggered animations, and layout animations.",
        user_id: "motion_designer",
        date_create: new Date("2024-02-28"),
        user_owned: true,
    },
    {
        id: 14,
        name: "Database Design for Developers",
        link: "/topics/14/114",
        description: "Fundamental principles of database design, normalization, indexing strategies, and query optimization for application developers.",
        user_id: "db_admin",
        date_create: new Date("2024-03-22"),
        user_owned: false,
    },
    {
        id: 15,
        name: "Progressive Web Apps",
        link: "/topics/15/115",
        description: "Building Progressive Web Apps that work offline, send push notifications, and provide native app-like experience. Service Worker and Cache API explained.",
        user_id: "web_platform",
        date_create: new Date("2024-01-10"),
        user_owned: true,
    },
];

export default TopicDisplay;
