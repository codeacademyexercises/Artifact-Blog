import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Submit extends Component {
    render(){
        return(
            <div>
                <Link to={`/form`} >
                <button type="submit" value="Post" />
                </Link>
            </div>
        );
    };
}

export default Submit;