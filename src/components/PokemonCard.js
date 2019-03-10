import React from "react";
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
    render() {
        const { name, img, types } = this.props;

        return (
                <div>
                    <img src= {img} alt= 'Imagen de un pokemon'/>
                    <h2>{name}</h2>

                    <ul>
                        {types.map((type, index)=>{
                            return (
                            <li key={index}>
                                {type.type.name}
                            </li>
                            );
                        })}
                    </ul>

                </div>
        );
    }
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired
  }

export default PokemonCard;