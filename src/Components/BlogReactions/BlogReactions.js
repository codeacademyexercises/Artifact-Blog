import React, { Component } from 'react';
import './BlogReactions.css';
class BlogReactions extends Component {
    render(){
        let loveItIcon;
        if(this.props.like===true){
            loveItIcon = 'heart-red.svg'
        }else{
            loveItIcon='heart-black.svg'
        }
        return(
            <div className="blog-reactions">
                    {/* <div> */}
                        <img className="icon" alt='' src={require('../../Icons/clapping.svg')} onClick={()=> this.props.clapsUpdate()}/>{this.props.claps}
                    {/* </div>
                    <div> */}
                        <img className="icon1" alt='' src={require('../../Icons/'+loveItIcon)} onClick={()=>this.props.likeToggle()}/>
                    {/* </div> */}
            </div>
        );
    };
}

export default BlogReactions;