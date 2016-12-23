import React, { PropTypes } from 'react';

import Col from '../../components/Col';
import ClickableThumbnail from '../../components/ClickableThumbnail';

/**
 * A pokemon wrapped inside a clickable thumbnail
 */
const ClickableThumbnailPokemon = ({ pokemon, toggleModal }) => {
  return (
    <Col xs={6} sm={4} md={3}>
      <ClickableThumbnail
        title={pokemon.title}
        imageUrl={pokemon.imageUrl}
        style={{ backgroundColor: '#FCFCFC' }}
        onClick={toggleModal.bind(null, { mode: 'edit', isOpen: true, activePokemon: pokemon })}
      />
    </Col>
  );
};

ClickableThumbnailPokemon.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default ClickableThumbnailPokemon;
