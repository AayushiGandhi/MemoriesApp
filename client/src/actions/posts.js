import * as api from "../api";
import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE, FETCH_By_SEARCH } from "../constants/actionTypes";

//actions creators : functions that return actions
 export const getPosts = () => async (dispatch) => {
    
    try{
        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data});
    }
    catch(error){
        console.log(error.message)

    }
    //const action = {type:'FETCH_ALL', payload:[]} //action is just an object that has type and payload. payload is data where we store all of our posts
}

export const getPostBySearch = (searchQuery) => async(dispatch) => {
    try{
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery)
        console.log(data)
        dispatch({type: FETCH_By_SEARCH, payload: data});
    }
    catch(e) {
        console.log(e)
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
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