import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleModal } from './actions';
import H1 from '../../components/H1';
import Row from '../../components/Row';
import ModalPokemonForm from './ModalPokemonForm';
import ClickableThumbnailPokemon from './ClickableThumbnailPokemon';
import ClickableThumbnailAddButton from './ClickableThumbnailAddButton';

/**
 * Inventory handles all pokemons in your inventory,
 * that includes Add, Edit, Remove functionality
 */
class Inventory extends Component {
  static propTypes = {
    inventories: PropTypes.array.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

  render() {
    const { inventories, toggleModal } = this.props;

    // Ge all clickable pokemon thumbnails
    const clickableThumbnailPokemons = inventories.map((pokemon) => {
      return <ClickableThumbnailPokemon key={pokemon.id} pokemon={pokemon} toggleModal={toggleModal} />
    });

    return (
      <div>
        <H1>Inventory</H1>
        <Row>
          {clickableThumbnailPokemons}
          <ClickableThumbnailAddButton toggleModal={toggleModal} />
        </Row>
        <ModalPokemonForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inventories: state.inventories
  };
}

export default connect(mapStateToProps, { toggleModal })(Inventory);
