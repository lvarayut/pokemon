import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
import { mount } from 'enzyme';

import Inventory from '../';
import ClickableThumbnailPokemon from '../ClickableThumbnailPokemon';
import ClickableThumbnailAddButton from '../ClickableThumbnailAddButton';
import ModalPokemonForm from '../ModalPokemonForm';

describe('Inventory', () => {
  it('should renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={configureStore()}>
        <Inventory />
      </Provider>,
      div
    );
  });

  it('should render all clickable pokemon thumbnails', () => {
    const store = configureStore();
    const wrapper = mount(
      <Provider store={store}>
        <Inventory />
      </Provider>,
    );
    expect(wrapper.find(ClickableThumbnailPokemon).length).toBeGreaterThan(0);
  });

  it('should render a clickable add pokemon thumbnail', () => {
    const wrapper = mount(
      <Provider store={configureStore()}>
        <Inventory />
      </Provider>,
    );
    expect(wrapper.find(ClickableThumbnailAddButton).length).toBeGreaterThan(0);
  });

  it('should render a ModalPokemonForm', () => {
    const wrapper = mount(
      <Provider store={configureStore()}>
        <Inventory />
      </Provider>,
    );
    expect(wrapper.find(ModalPokemonForm).length).toBeGreaterThan(0);
  });
});
