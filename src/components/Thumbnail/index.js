import React, { PropTypes } from 'react';
import { Thumbnail as RBThumbnail } from 'react-bootstrap';

/**
 * Thumbnail wraps a Thumbnail component provided by react-router,
 * it is to generate a proper styled thumbnail along with header text
 */
const Thumbnail = ({ title, imageUrl, style }) => {
  return (
    <RBThumbnail src={imageUrl} style={{ textAlign: 'center', ...style }}>
      <h3 style={{ margin: 0, color: '#777' }}>{title}</h3>
    </RBThumbnail>
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};


export default Thumbnail;
