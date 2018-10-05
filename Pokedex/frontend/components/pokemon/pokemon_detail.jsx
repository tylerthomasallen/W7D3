import React from 'react';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.pokemon.id);
  }
  render() {
    debugger
    return <div> I WANT TO BE THE VERY BEST </div>;
  }
}

export default PokemonDetail;
