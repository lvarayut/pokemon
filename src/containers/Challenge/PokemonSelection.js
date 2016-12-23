import React, { PropTypes } from 'react';

import Thumbnail from '../../components/Thumbnail';
import Input from '../../components/Input';

/**
 * A selection that contains all pokemon options
 */
const PokemonSelection  = ({ inventories, fighterNumber, fighterId, handleChange }) => {
  const fighter = inventories.find(pokemon => pokemon.id === fighterId);
  const options = inventories.map(pokemon => {
    return <option key={pokemon.id} value={pokemon.id}>{pokemon.title}</option>
  });

  let thumbnailImageUrl;

  // Use a selected image url, if possible
  if (fighter && fighter.imageUrl) {
    thumbnailImageUrl = fighter.imageUrl;
  } else {
    thumbnailImageUrl = "http://www.clipartbest.com/cliparts/jTx/pxX/jTxpxX6Xc.png";
  }

  return (
    <div>
      <Input
        name={fighterNumber.toString()}
        title={`Pokemon ${fighterNumber}`}
        type="select"
        onChange={handleChange}
        componentClass="select"
      >
        {options}
      </Input>
      <Thumbnail
        imageUrl={thumbnailImageUrl}
        style={{ backgroundColor: '#FCFCFC', height: 269 }}
      />
    </div>
  );
};

PokemonSelection.propTypes = {
 inventories: PropTypes.array.isRequired,
  fighterNumber: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  fighterId: PropTypes.number
};

export default PokemonSelection;
