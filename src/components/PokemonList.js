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
                            <li key={pokemonItem.name}>
                                {/* <PokemonCard/> */}
                                {pokemonItem.name}
                                {pokemonItem.url.id}
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