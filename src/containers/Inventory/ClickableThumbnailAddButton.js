import React, { PropTypes } from 'react';

import Col from '../../components/Col';
import ClickableThumbnail from '../../components/ClickableThumbnail';

/**
 * A button wrapped inside a clickable thumbnail for adding a new pokemon
 */
const ClickableThumbnailAddButton = ({ toggleModal }) => {
  return (
    <Col xs={6} sm={4} md={3} key='addThumbnail'>
      <ClickableThumbnail
        imageUrl="https://cdn0.iconfinder.com/data/icons/web-and-application/512/add_plus__free_hand_drawn_sketch-512.png"
        style={{ backgroundColor: '#FCFCFC', height: 269 }}
        onClick={toggleModal.bind(this, { mode: 'add', isOpen: true, activePokemon: null })}
      />
    </Col>
  );
};

ClickableThumbnailAddButton.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default ClickableThumbnailAddButton;
