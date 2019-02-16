import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Routes from './Routes.js';

describe('<Routes /> ',()=>{
    it('snapshot test ',()=>{
        const tree = renderer.create(<Routes />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});