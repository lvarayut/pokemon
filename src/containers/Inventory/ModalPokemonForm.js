import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';

import { toggleModal, updateInventory, removePokemon } from './actions';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const initialState = {
  pokemon: {
    title: '',
    imageUrl: '',
    strength: 0
  }
};

/**
 * A modal for Add/Edit/Remove a pokemon
 */
class ModalPokemonForm extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  static propTypes = {
    modal: PropTypes.object.isRequired,
    toggleModal: PropTypes.func,
    updateInventory: PropTypes.func,
    removePokemon: PropTypes.func
  };

  componentWillReceiveProps(nextProps) {
    // Toggle a value of pokemon object when a modal opened or closed
    if (nextProps.modal.activePokemon) {
      this.setState({
        pokemon: {
          ...nextProps.modal.activePokemon
        }
      });
    } else {
      this.setState(initialState);
    }
  }

  /**
   * Close a modal and reset the modal state
   */
  closeModal = () => {
    this.props.toggleModal({ mode: null, isOpen: false, activePokemon: null });
  };

  /**
   * A simple form that is reusable for all fields
   * @param fieldName
   */
  getValidationState(fieldName) {
    const SUCCESS = 'success';
    const ERROR = 'error';
    const { pokemon } = this.state;

    if (fieldName === 'title') {
      // Bootstrap validation doesn't provide touched event,
      // we need to prevent showing errors when the form is pristine
      if (!pokemon.title) return null;
      else if (pokemon.title.length >= 4) {
        return SUCCESS;
      }
    } else if (fieldName === 'imageUrl') {
      if (!pokemon.imageUrl) return null;
      else if (pokemon.imageUrl.match(/\.(jpeg|jpg|gif|png)$/)) {
        return SUCCESS;
      }
    } else if (fieldName === 'strength') {
      if (!pokemon.strength) return null;
      else if (pokemon.strength > 0 && pokemon.strength <= 100) {
        return SUCCESS;
      }
    }
    return ERROR;
  }

  /**
   * Get an entire form state to enable/disable the submit button
   * @returns {boolean}
   */
  getValidationFormState() {
    const SUCCESS = 'success';
    return (
      this.getValidationState('title') === SUCCESS &&
      this.getValidationState('imageUrl') === SUCCESS &&
      this.getValidationState('strength') === SUCCESS
    );
  }

  /**
   * Submit the form and close the modal
   */
  submitForm = () => {
    this.props.updateInventory(this.state.pokemon);
    this.setState(initialState);
    this.closeModal();
  };

  /**
   * Remove a pokemon and close the modal
   */
  removePokemon = () => {
    this.props.removePokemon(this.state.pokemon);
    this.setState(initialState);
    this.closeModal();
  };

  /**
   * Simple form change handling that is reusable for all fields
   * @param e
   */
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      pokemon: {
        ...this.state.pokemon,
        [name]: value
      }
    });
  };

  render() {
    const { mode, isOpen, activePokemon } = this.props.modal;
    const { pokemon } = this.state;
    let title, actionButton, leftButton;

    //  Set value based on mode (add, edit)
    if (mode === 'add') {
      title = 'Add a new pokemon';
      actionButton = <Button bsStyle='success' onClick={this.submitForm} disabled={!this.getValidationFormState()}>Add</Button>;
    } else if (mode === 'edit') {
      title = `Edit details of ${activePokemon.title}`;
      actionButton = <Button bsStyle='success' onClick={this.submitForm} disabled={!this.getValidationFormState()}>Update</Button>;
      leftButton = <Button bsStyle='danger' bsSize="small" onClick={this.removePokemon}><Glyphicon glyph="trash" /></Button>;
    }

    return (
      <Modal title={title} isShowModal={isOpen} closeModal={this.closeModal} actionButton={actionButton} leftButton={leftButton}>
        <Form>
          <Input
            name="title"
            title="Title"
            type="text"
            value={pokemon.title}
            placeholder="Enter a title"
            onChange={this.handleChange}
            validationState={this.getValidationState.bind(this, 'title')}
            inValidLabel="Title must be at least 4 characters"
          />
          <Input
            name="imageUrl"
            type="text"
            title="Image URL"
            value={pokemon.imageUrl}
            placeholder="Enter an image url"
            onChange={this.handleChange}
            validationState={this.getValidationState.bind(this, 'imageUrl')}
            inValidLabel="Please input a valid url"
          />
          <Input
            name="strength"
            type="number"
            title="Strength"
            value={pokemon.strength}
            placeholder="Enter a strength"
            onChange={this.handleChange}
            validationState={this.getValidationState.bind(this, 'strength')}
            inValidLabel="Strength must be number and its maximum is 100"
          />
        </Form>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal
  };
}

export default connect(mapStateToProps, { toggleModal, updateInventory, removePokemon })(ModalPokemonForm);
