import DisplayCard from "./DisplayCard";
import React from "react";
import Card from "@mui/material/Card";

interface DisplayBoxProps {
    name: string;
    post_link: string;
    description: string;
    user_id: string;
    date_create: Date;
    user_owned: boolean;
}

const PostElem: React.FC<DisplayBoxProps> = ({ name, post_link, description, user_id, date_create, user_owned }) => {
    return (
        <Card variant="outlined" sx={{ width: { xs: "95%", sm: "90%", md: "90%", lg: "90%" }, maxWidth: 900, m: 1.5 }}>
            <DisplayCard
                name={name}
                link={post_link}
                user_id={user_id}
                date_create={date_create}
                user_owned={user_owned}
                description={description}
            />
        </Card>
    );
};

export default PostElem;
