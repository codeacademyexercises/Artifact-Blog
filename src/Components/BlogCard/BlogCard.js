import React, { Component } from 'react';
import BlogReactions from '../../containers/BlogReactions';
import './BlogCard.css';
// import { threadId } from 'worker_threads';

class BlogCard extends Component {
    render(){
        return(
            <div className="blog-card">
                <div>
                    <img className='blogPostImage' alt='' src={require('../../Images/abstract.png')} />
                </div>
                <div className="time">
                    <div>
                        {this.props.date}
                    </div>
                    <div id='timeToRead'>
                        {this.props.timeToRead}
                    </div>
                </div>
                <div className="PostHeader">
                    <h3>{this.props.title}</h3>
                {/* </div>
                <div className="PostHeader"> */}
                    <p>{this.props.description}</p>
                </div>
                <hr/>
                <BlogReactions className="BlogReactions" index={this.props.index}/>
            </div>
        );
    };
}

export default BlogCard;