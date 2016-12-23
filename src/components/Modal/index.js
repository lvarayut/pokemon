import React, { PropTypes } from 'react';
import { Modal as RBModal, Button } from 'react-bootstrap';

/**
 * Modal wraps the Modal component provided by react-bootstrap,
 * it also adds support for leftButton in the footer section
 */
const Modal = ({ title, actionButton = null, leftButton = null, children, isShowModal, closeModal }) => {
  return (
    <div>
      <RBModal show={isShowModal} onHide={closeModal}>
        <RBModal.Header closeButton>
          <RBModal.Title>{title}</RBModal.Title>
        </RBModal.Header>
        <RBModal.Body>
          {children}
        </RBModal.Body>
        <RBModal.Footer>
          <div style={{ float: 'left' }}>{leftButton}</div>
          <Button onClick={closeModal}>Close</Button>
          {actionButton}
        </RBModal.Footer>
      </RBModal>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  actionButton: PropTypes.node,
  leftButton: PropTypes.node,
  children: PropTypes.node,
  isShowModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Modal;
