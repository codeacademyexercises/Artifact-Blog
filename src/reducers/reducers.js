import {
    CLAP_UNCLAP,
    LIKE_DISLIKE,
} from '../actions/actions';
const BlogPostArray = require('../BlogPosts/index.js');
console.log(BlogPostArray);

const clapCount = (state = { claps: 0, toggle: false }, action)=>{
    switch(action.type){
        case CLAP_UNCLAP:
                return Object.assign({},state,{claps: state.claps + (state.toggle?-1:1), toggle: !state.toggle})
        default:
            return state
    }
}

const likeUnlike = (state = false, action)=>{
    switch(action.type){
        case LIKE_DISLIKE:
            return !state
        default: 
            return state
    }
}

const blogPostReactionUpdate = (state = {BlogPostArray}, action)=>{
    console.log(state);
    switch(action.type){
        case CLAP_UNCLAP:
            return { BlogPostArray: state.BlogPostArray.map((post,index)=>{
                if(index===action.index){
                    return Object.assign({}, post, clapCount({ claps: post.claps, toggle: post.toggle }, action) );
                }
                return post;
            })}
        case LIKE_DISLIKE:
            return { BlogPostArray: state.BlogPostArray.map((post,index)=>{
                    if(index === action.index){
                        return Object.assign({}, post, {like: likeUnlike(post.like, action)});
                    }
                    return post;
                })
            }
        default:
            return state;
    }
}

export default blogPostReactionUpdate; 
