import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="blog-header">
                <div className="blog-title">
                    <h2 className="blog-title1">The Artifact</h2>
                </div>
                <div className="blog-title">
                    <h3 className="blog-title1">Culture & The Blog</h3>
                </div>
                <div className="blog-links">
                    <label className="blog-links1">Blog</label>
                    <label className="blog-links1">About</label>
                    <label className="blog-links1">Contact</label>
                </div>
            </div>
        );
    }
}

export default Header;