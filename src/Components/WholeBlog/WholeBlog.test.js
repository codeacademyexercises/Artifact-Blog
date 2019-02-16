import React from 'react';
import { shallow } from 'enzyme';
import WholeBlog from './WholeBlog.js';

describe('<WholeBlog /> ',()=>{
    it('checking if retreiving data ',async ()=>{
        const wrapper = shallow(<WholeBlog/>);
        const instance = wrapper.instance();
        await instance.componentDidMount();
        expect(wrapper.state('data').length).toEqual(6);
    })
})