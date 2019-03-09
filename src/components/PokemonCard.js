import React from "react";
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
    render() {
        const { name, types, url } = this.props;

        return (
                <div>
                    <img className="img" src= {url} alt= 'Imagen de un pokemon'/>
                    <h2 className="title__pokemon">{name}</h2>

                    <ul className="types">
                        {types.map((type, index)=>{
                            return (
                            <li className="type" key={index}>
                                {type}
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