import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./Styles.js";
import { useSelector } from "react-redux";

//fetch the data from global data store using selectors

const Posts = () => {
    
    const posts = useSelector((state) => state.posts); //initialse as a hooks. Parameter of the callback function has access to the whole global redux store/state

    const classes = useStyles();

    console.log(posts)
    
    return (
        <>
            <h2>Posts</h2>
            <Post />
            <Post />
        </>
    );
};

export default Posts;