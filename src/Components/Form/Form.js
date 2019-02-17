import React, { Component } from 'react';
import './form.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const FormData = require('form-data');

class Form extends Component {
    state = {
        BlogTitle: "",
        BlogDescription: "",
        ReadingTime: 0,
    };
    fileInput = React.createRef();
    handleBlogEntry = (event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleSubmit = async (event)=>{
        const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const submissionDate = new Date();
        const form = new FormData();
        let date = submissionDate.getDate();
        if(date[date.length-1]==='1'){
            date+='st ';
        }else if(date[date.length-1]==='2'){
            date+='nd ';
        }else if(date[date.length-1]==='3'){
            date+='rd ';
        }else{
            date+='th ';
        }
        date+=month[submissionDate.getMonth()]+', ';
        date+=submissionDate.getFullYear();
        form.append('title',this.state.BlogTitle);
        form.append('description',this.state.BlogDescription);
        form.append('date',date);
        form.append('timeToRead',this.state.ReadingTime);        
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
                <div>
                    Time to Read:
                    <input type='number' name='ReadingTime' min='0' max='10' onChange={this.handleBlogEntry}/>
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