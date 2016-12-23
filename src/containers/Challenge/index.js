import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import H1 from '../../components/H1';
import Row from '../../components/Row';
import Col from '../../components/Col';
import ButtonFight from './ButtonFight';
import PokemonSelection from './PokemonSelection';

/**
 * Challenge handles a challenging game
 */
class Challenge extends Component {
  constructor() {
    super();
    this.state = {
      fighterId1: null,
      fighterId2: null,
      winner: null
    }
  }

  static propTypes = {
    inventories: PropTypes.array.isRequired
  };

  /**
   * Get a validation state of the select fields for enable/disable the fight button
   * @returns boolean
   */
  getValidationButtonState() {
    return this.state.fighterId1 && this.state.fighterId2;
  }

  /**
   * Get selected pokemons
   * @returns {{fighter1: *, fighter2: *}}
   */
  getPokemon() {
    const { inventories } = this.props;
    let fighter1, fighter2;
    for (let i = 0; i < inventories.length; i++) {
      if (inventories[i].id === this.state.fighterId1) {
        fighter1 = inventories[i];
      }
      if (inventories[i].id === this.state.fighterId2) {
        fighter2 = inventories[i];
      }
    }
    return { fighter1, fighter2 }
  }

  /**
   * Handle on change select fields
   * @param e
   */
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [`fighterId${name}`]: Number.parseInt(value, 10)
    });
  };

  /**
   * Calculate a winner of a fight
   */
  calculateWinner = () => {
    const { fighter1, fighter2 } = this.getPokemon();
    let winner;

    // A pokemon that has more strength will win, however,
    // if their strength are equal, one of them will win randomly
    if (fighter1.strength === fighter2.strength) {
      const winnerNumber = Math.floor(Math.random() * 2) + 1;
      winner = winnerNumber === 1 ? fighter1 : fighter2;
    } else if (fighter1.strength > fighter2.strength) {
      winner = fighter1;
    } else {
      winner = fighter2
    }
    this.setState({ winner });
  };

  render() {
    let winner;
    if (this.state.winner) {
      winner = <h3>The winner is {this.state.winner.title}!</h3>;
    }

    return (
      <div>
        <H1>Challenge</H1>
        <Row>
          <Col xs={4}>
            <PokemonSelection
              fighterNumber={1}
              fighterId={this.state.fighterId1}
              handleChange={this.handleChange}
              inventories={this.props.inventories}
            />
          </Col>
          <Col xs={4} style={{ textAlign: 'center', paddingTop: 50 }}>
            <ButtonFight disabled={!this.getValidationButtonState()} onClick={this.calculateWinner}>Fight!</ButtonFight>
            {winner}
          </Col>
          <Col xs={4}>
            <PokemonSelection
              fighterNumber={2}
              fighterId={this.state.fighterId2}
              handleChange={this.handleChange}
              inventories={this.props.inventories}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inventories: state.inventories
  };
}


export default connect(mapStateToProps)(Challenge);
