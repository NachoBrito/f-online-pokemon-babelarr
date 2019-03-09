import React, { Component } from 'react';
import {getPokemons} from './services/pokemonServices';
import PokemonList from './components/PokemonList';
import InputFilter from './components/InputFilter';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    this.getPokeChars = this.getPokeChars.bind(this);
  }

  componentWillMount() {
    this.getPokeChars();
  }

  getPokeChars() {
    let urlResults = [];

    getPokemons()
    .then(data => {
      data.results.map(item => {
        let urlObjPokemon = fetch(item.url).then(response => response.json());
        
        urlObjPokemon.then(data => {
          urlResults.push(data);
          this.setState({
            results: urlResults.sort(((a, b) => a.id - b.id))
          });
        });
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Mi lista de Pokemons</h1>
        <InputFilter/>
        {
          this.state.results &&
          <PokemonList pokemons={this.state.results}/>
        }
      </React.Fragment>
    );
  }
}

export default App;
