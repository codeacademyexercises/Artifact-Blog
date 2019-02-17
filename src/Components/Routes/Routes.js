import WholeBlog from '../WholeBlog/WholeBlog.js';
import React, {Component} from 'react';
import Form from '../Form/Form.js';    
import {BrowserRouter as Router, Route} from 'react-router-dom';



class Routes extends Component{
    render(){
    return (
    <Router>
    <div>
        {/* <Provider store = {store}> */}
            <Route exact path='/form' component={Form} />
        {/* </Provider> */}
    <Route exact path='/' component={WholeBlog}/>
    
    
    </div>
    
    
    </Router>
    );
    }
}

export default Routes;