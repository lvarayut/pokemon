import React from 'react';
import { Grid } from 'react-bootstrap';

/**
 * Container is a wrapped version of Grid from react-bootstrap
 */
const Container = (props) => {
  return (
    <Grid {...props}>
      {props.children}
    </Grid>
  );
};

export default Container;
