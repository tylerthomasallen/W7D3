import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {


  render() {
    const { pokemon } = this.props;
    return (
      <Link to={`/pokemon/${pokemon.id}`}>
        <li className='sidebar'>
          {pokemon.id}
          <img className='pokepics'src={pokemon.image_url}></img>
          {pokemon.name}
        </li>
      </Link>
    );
  }
}

export default PokemonIndexItem;
