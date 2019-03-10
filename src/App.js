import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {getPokemons} from './services/pokemonServices';
import PokemonList from './components/PokemonList';
import InputFilter from './components/InputFilter';

const themeApp = createMuiTheme({
  palette: {
    primary: {
      light: '#ad33ad',
      main: '#990099',
      dark: '#6b006b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5b5b5b',
      main: '#333333',
      dark: '#232323',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
    fontSize: 16
  }
});

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
        
        return urlObjPokemon.then(data => {
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
        <CssBaseline />
        <MuiThemeProvider theme={themeApp}>
          <h1>Mi lista de Pokemons</h1>
          <InputFilter keyupAction={this.getQuery}/>
          {
            this.state.results &&
            <PokemonList pokemons={charResults}/>
          }
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
