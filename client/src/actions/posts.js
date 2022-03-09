import * as api from "../api";

//actions creators : functions that return actions
 const getPosts = () => async (dispatch) => {
    
    try{
        const {data} = await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload: data});
    }
    catch(error){
        console.log(error.message)

    }
    //const action = {type:'FETCH_ALL', payload:[]} //action is just an object that has type and payload. payload is data where we store all of our posts
}

export default getPosts;