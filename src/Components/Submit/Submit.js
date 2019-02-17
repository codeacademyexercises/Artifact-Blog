import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './submit.css';

class Submit extends Component {
    render(){
        return(
            <div>
                <Link to={`/form`} >
                <button className='submit' type="submit">POST</button>
                </Link>
            </div>
        );
    };
}

export default Submit;