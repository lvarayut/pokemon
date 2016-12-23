import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../';
import Navbar from '../../../components/Navbar';

describe('App', () => {
  it('should renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render a navbar with a title nad navItems properties', () => {
    const wrapper = shallow(<App />);
    const navbar = wrapper.find(Navbar);

    expect(navbar.length).toEqual(1);
    expect(navbar.prop('title')).toBeDefined();
    expect(navbar.prop('navItems')).toBeDefined();
  });
});
