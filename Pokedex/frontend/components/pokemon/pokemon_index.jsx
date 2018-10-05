import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Switch, Link, Route } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';

class PokemonIndex extends React.Component {
  componentDidMount() {

   this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
    <div>
      <Switch>
      <Route path='/pokemon/:pokemonId' component={PokemonDetail}></Route>
        <ul>
          {pokemonItems}
        </ul>
      </Switch>
    </div>
    );
  }
}

export default PokemonIndex;
