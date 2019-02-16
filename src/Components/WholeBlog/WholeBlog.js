import React, { Component } from 'react';
import Header from '../Header/Header';
import BlogPosts from '../BlogPosts/BlogPosts';
import Footer from '../Footer/Footer';
import './WholeBlog.css';

const axios = require('axios');

class WholeBlog extends Component {
  state = {
    data: '75',
  }

  componentDidMount() {
    return axios.get('https://api.myjson.com/bins/hc5ye').then((Blog) => {
      this.setState({
        data: Blog.data,
      });
    });
  }

  render() {
    return (
      <div className="WholeBlog">
        <Header className="blog-header" />
        <BlogPosts className="BlogPosts" />
        <Footer className="Footer" />
      </div>
    );
  }
}

export default WholeBlog;
