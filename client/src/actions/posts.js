import * as api from "../api";

//actions creators : functions that return actions
 export const getPosts = () => async (dispatch) => {
    
    try{
        const {data} = await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload: data});
    }
    catch(error){
        console.log(error.message)

    }
    //const action = {type:'FETCH_ALL', payload:[]} //action is just an object that has type and payload. payload is data where we store all of our posts
}

export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);
        dispatch({type:'CREATE', payload: data});
    }
    catch(error){
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
        //make api request to update the post
        const { data } = await api.updatePost(id, post);

        dispatch({type: 'UPDATE', payload: data});
    }
    catch(error){
        console.log(error);  
    }
}