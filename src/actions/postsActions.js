// const redux action types
export const GET_POSTS = "GET_POSTS";
// get posts telling Redux that we are going to fetch posts from the API call
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
// getpostssucess passing the posts to redux on a successful API call
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
// get posts failure informing redux that an error was encountered
// during redux on failed API call

// create action creators, which are functions that return an action
// which consts of the type and an optional payload loading data

export const getPosts = () => ({
	type: GET_POSTS,
});

export const successPosts = (Post) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
});

export const failPosts = () => ({
	type: GET_POSTS_FAILURE,
});



