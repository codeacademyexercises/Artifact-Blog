import React, { Component } from 'react';
import './BlogReactions.css';
class BlogReactions extends Component {
    render(){
        return(
            <div className="blog-reactions">
                    {/* <div> */}
                        <img className="icon" alt='' src={require('../../Icons/clapping.svg')} />
                    {/* </div>
                    <div> */}
                        <img className="icon1" alt='' src={require('../../Icons/heart-black.svg')} />
                    {/* </div> */}
            </div>
        );
    };
}

export default BlogReactions;