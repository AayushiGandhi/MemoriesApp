import React from "react";
import {Container} from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
import PostDetails from "../src/components/PostDetails/PostDetails.jsx";

const App = () => {
    const user = JSON.parse(localStorage.getItem("profile"))
    return (
        <BrowserRouter>
            <Container maxwidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/posts" element={<Home />} />
                    <Route path="/" element={<Navigate replace to="/posts" />} />
                    <Route path="/posts/search" element={<Home />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/auth" exact element={(!user ? <Auth /> : <Navigate replace to="/posts" />)}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;