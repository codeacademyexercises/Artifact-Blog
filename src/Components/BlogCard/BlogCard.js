import React, { Component } from 'react';
import BlogReactions from '../BlogReactions/BlogReactions.js';
import './BlogCard.css';

class BlogCard extends Component {
    render(){
        return(
            <div className="blog-card">
                <div>
                    <img className='blogPostImage' alt='' src={require('../../Images/abstract.png')} />
                </div>
                <div className="PostHeader">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="PostHeader">
                    <p>{this.props.description}</p>
                </div>
                <BlogReactions className="BlogReactions"/>
            </div>
        );
    };
}

export default BlogCard;