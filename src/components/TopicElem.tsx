import DisplayCard from "./DisplayCard";
import Card from "@mui/material/Card";
import React from "react";

interface TopicBoxProps {
    name: string;
    topic_link: string;
    user_id: string;
    date_create: Date;
    user_owned: boolean;
}

export default function TopicBox({ name, topic_link, user_id, date_create, user_owned }: TopicBoxProps) {
    return (
        <Card variant="outlined" sx={{ width: { xs: "95%", sm: "90%", md: "90%", lg: "90%" }, maxWidth: 900, m: 1.5 }}>
            <DisplayCard
                name={name}
                link={topic_link}
                user_id={user_id}
                date_create={date_create}
                user_owned={user_owned}
            />
        </Card>
    );
}
