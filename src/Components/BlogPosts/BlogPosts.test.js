import React from 'react';
import { shallow } from 'enzyme';
import BlogPosts from './BlogPosts.js';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

describe('<BlogPosts /> ',()=>{
    it('snapshot test',()=>{
        const tree = renderer.create(<Router><BlogPosts /></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});