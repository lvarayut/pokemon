import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
import { mount } from 'enzyme';

import Challenge from '../';
import PokemonSelection from '../PokemonSelection';

describe('Challenge', () => {
  it('should renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={configureStore()}>
        <Challenge />
      </Provider>,
      div
    );
  });

  it('should render two PokemonSelection components', () => {
    const store = configureStore();
    const wrapper = mount(
      <Provider store={store}>
        <Challenge />
      </Provider>,
    );
    expect(wrapper.find(PokemonSelection).length).toEqual(2);
  });
});
