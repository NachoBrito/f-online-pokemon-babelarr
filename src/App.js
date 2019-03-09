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

  componentWillMount(){
    this.getPokeChars();
  }

  getPokeChars() {
    getPokemons()
    .then(data => {
      this.setState({
        results: data.results
      })
      console.log(data.results);
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Mi lista de Pokemons</h1>
        <InputFilter/>
        <PokemonList pokemons={this.state.results}/>
      </React.Fragment>
    );
  }
}

export default App;
