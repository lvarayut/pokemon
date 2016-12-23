import React, { PropTypes } from 'react';

import Thumbnail from '../Thumbnail';
import Clickable from '../../enhancers/Clickable';

/**
 * ClickableThumbnail is a simple enhanced Thumbnail
 */
const ClickableThumbnail = ({ onClick, ...props }) => {
  const EnhancedComponent = Clickable(onClick)(Thumbnail);

  return (
    <EnhancedComponent {...props} />
  );
};

ClickableThumbnail.propTypes = {
  onClick: PropTypes.func
};

export default ClickableThumbnail;
