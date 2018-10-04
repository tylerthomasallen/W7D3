import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    // debugger
   this.props.requestAllPokemon();
  }

  render() {
    return (
    <div>
      <ul>
        {
          this.props.pokemon.map(pokemon =>
            <li>
              {pokemon.name}
            </li>
          )
        }
      </ul>
    </div>
    );
  }
}

export default PokemonIndex;
