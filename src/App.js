import React, { Component } from 'react';
import {getPokemons} from './services/pokemonServices';
import PokemonList from './components/PokemonList';
import InputFilter from './components/InputFilter';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      query: ''
    };

    this.getPokeChars = this.getPokeChars.bind(this);
    this.filterThis = this.filterThis.bind(this);
    this.getQuery = this.getQuery.bind(this);
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

  getQuery(e) {
    const userQuery= e.currentTarget.value;
    this.setState({
      query: userQuery
    });
  }


  filterThis() {
    const filteredResults = this.state.results.filter(item => {
      const filterName = item.name;

      if(filterName.toLowerCase().includes(this.state.query.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

    return filteredResults;
  }

  render() {
    const charResults = this.filterThis();
    return (
      <React.Fragment>
        <h1>Mi lista de Pokemons</h1>
        <InputFilter keyupAction={this.getQuery}/>
        {
          this.state.results &&
          <PokemonList pokemons={charResults}/>
        }
      </React.Fragment>
    );
  }
}

export default App;
