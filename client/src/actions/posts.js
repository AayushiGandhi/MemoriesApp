import * as api from "../api";
import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_POST, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from "../constants/actionTypes";


export const getPost = (id) => async(dispatch) => {
    try{
        dispatch({type: START_LOADING})

        const {data} = await api.fetchPost(id);
        console.log(data)
        dispatch({type: FETCH_POST, payload: data});

        dispatch({type: END_LOADING})

    }
    catch(error){
        console.log(error.message)
    }
}

//actions creators : functions that return actions
 export const getPosts = (page) => async (dispatch) => {
    
    try{
        dispatch({type: START_LOADING})

        const {data} = await api.fetchPosts(page);
        console.log(data)
        dispatch({type: FETCH_ALL, payload: data});

        dispatch({type: END_LOADING})
    }
    catch(error){
        console.log(error.message)

    }
    //const action = {type:'FETCH_ALL', payload:[]} //action is just an object that has type and payload. payload is data where we store all of our posts
}

export const getPostBySearch = (searchQuery) => async(dispatch) => {
    try{
        dispatch({type: START_LOADING})
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery)
        console.log(data)
        dispatch({type: FETCH_BY_SEARCH, payload: data});
        dispatch({type: END_LOADING})
    }
    catch(e) {
        console.log(e)
    }
}

export const createPost = (post, navigate) => async (dispatch) => {
    try{
        dispatch({type: START_LOADING})
        const { data } = await api.createPost(post);
        navigate(`/posts/${data._id}`)
        dispatch({type: CREATE, payload: data});
        dispatch({type: END_LOADING})
    }
    catch(error){
        console.log(error.message)
    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try{
        //make api request to update the post
        const { data } = await api.updatePost(id, post);

        dispatch({type: UPDATE, payload: data});
    }
    catch(error){
        console.log(error);  
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    }
    catch(error){
        console.log(error);  
    }
}

export const likePost = (id) => async (dispatch) => {
    try{
        const { data } = await api.likePost(id);

        dispatch({type: LIKE, payload: data})

    }
    catch(error) {
        console.log(error)
    }
}