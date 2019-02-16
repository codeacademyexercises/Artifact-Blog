import React, { Component } from 'react';
import './BlogPosts.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard.js';
import Submit from '../Submit/Submit.js';
const fs = require('fs');

class BlogPosts extends Component {
    blogPostsJSON = require('../../BlogPosts');
    render(){
            console.log(this.blogPostsJSON);
        let display = [];
        this.blogPostsJSON.default.forEach((postJSON)=>{
                display.push(<BlogCard title={postJSON.title} description={postJSON.description}/>);
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