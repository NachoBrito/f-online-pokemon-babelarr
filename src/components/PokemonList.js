import React from "react";
import PokemonCard from "./PokemonCard";

class PokemonList extends React.Component {

    render() {
        const { pokemons } = this.props;

        return (
                <ul>
                {
                    pokemons.map(pokemonItem => {
                        return (
                            <li key={pokemonItem.id}>
                                <PokemonCard name={pokemonItem.name} id={pokemonItem.id} img={pokemonItem.sprites.front_default} types={pokemonItem.types}/>   
                            </li>
                        );
                    }
                    ) 
                }
                </ul>
        );
    }
}

export default PokemonList;