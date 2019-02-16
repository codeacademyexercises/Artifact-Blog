import React, { Component } from 'react';
import './form.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const FormData = require('form-data');

class Form extends Component {
    state = {
        BlogTitle: "",
        BlogDescription: "",
    };
    fileInput = React.createRef();
    handleBlogEntry = (event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleSubmit = async (event)=>{
        event.preventDefault();
        if(this.fileInput.current){
            console.log(this.fileInput.current.files[0]);
            }
        const form = new FormData();
        form.append('title',this.state.BlogTitle);
        form.append('description',this.state.BlogDescription);
        console.log(form);
        await Axios.post('http://localhost:3005/',form).then((err)=>console.log(err)).catch((err)=>{console.log(err)});
    }
    render() {
        return (
            <form className="blog-entry">
                <div className="blog-input">
                    Image:
                        <input type="file" name="blogpost-image" accept="image/png, image/jpeg" ref={this.fileInput} />
                </div>
                <div className="blog-input">
                    Title:
                    <input type="text" name="BlogTitle" placeholder="Enter NewPost Title" onChange={this.handleBlogEntry}/>
                </div>
                <div className="blog-input">
                    Blog Description:
                                <textarea className="description" type="text" name="BlogDescription" placeholder="Enter description"  onChange={this.handleBlogEntry}/>
                </div>
                <div className="blog-submit">
                <Link to={'/'}>
                    <button type="submit" value="Submit" onClick={this.handleSubmit} >Home</button>
                </Link>
                </div>
            </form>
        ); 
    }
}
// onClick = {()=> (window.location.href = "/")}
export default Form;