import TopicDisplay from "./pages/TopicDisplay";
import PostDisplay from "./pages/PostDisplay";
import Home from "./pages/Home";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import BasicThreadView from "./pages/BasicThreadView";
import StyledThreadView from "./pages/StyledThreadView";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepOrange, lightBlue } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: deepOrange,
        secondary: lightBlue,
    },
});

const App: React.FC = () => {
    const [userID, setuserID] = useState(null);
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ResponsiveAppBar user={userID} />
                    <Routes>
                        <Route path="/thread/1" element={<BasicThreadView />} />
                        <Route path="/thread/1/styled" element={<StyledThreadView />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/topics" element={<Home />} />
                        <Route path="/topics/:topicID" element={<TopicDisplay />} />
                        <Route path="/topics/:topicID/:postID" element={<PostDisplay />} />
                        {/* <Route path="/topics/:topicID/:postID/:commentID" element = {} />*/}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
