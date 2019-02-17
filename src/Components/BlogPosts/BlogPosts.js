import React, { Component } from 'react';
import './BlogPosts.css';
// import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard.js';
import Submit from '../Submit/Submit.js';
// const fs = require('fs');

class BlogPosts extends Component {
    blogPostJSON;
    componentWillMount(){
    this.blogPostsJSON = require('../../BlogPosts');
    };
    render(){
            console.log(this.blogPostsJSON);
        let display = [];
        this.blogPostsJSON.forEach((postJSON,index)=>{
                display.push(<BlogCard title={postJSON.title} description={postJSON.description} date={postJSON.date} timeToRead={postJSON.timeToRead} claps={postJSON.claps} like={postJSON.like} index={index}/>);
        });
        return (
                <div className="blogPosts">
                        <div className="PostContainer">
                        {display}
                        </div>
                        <Submit className="submit"/>
                </div>
        );
    };
}

export default BlogPosts;