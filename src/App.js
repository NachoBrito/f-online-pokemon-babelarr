import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {getPokemons} from './services/pokemonServices';
import PokemonList from './components/PokemonList';
import InputFilter from './components/InputFilter';
import Header from './components/Header';
import Footer from './components/Footer';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  bgPikachu: {
      backgroundColor: "yellow",
      minHeight: "100vh"
  },
  triangleLeft: {
    position: "fixed",
    width: 60,
    height: 60,
    top: -30,
    left: -30,
    backgroundColor: "black",
    transform: "rotate(45deg)"
  },
  triangleRight: {
    position: "fixed",
    width: 60,
    height: 60,
    top: -30,
    right: -30,
    backgroundColor: "black",
    transform: "rotate(45deg)"
  },
  circleLeft: {
    position: "fixed",
    width: 150,
    height: 150,
    bottom: -75,
    left: -75,
    backgroundColor: "red",
    borderRadius: "50%"
  },
  circleRight: {
    position: "fixed",
    width: 150,
    height: 150,
    bottom: -75,
    right: -75,
    backgroundColor: "red",
    borderRadius: "50%"
  },
  
 });

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
  },
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
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={themeApp}>
          <div className={classes.bgPikachu}>
          <div className={classes.triangleLeft}></div>
          <div className={classes.triangleRight}></div>
          <div className={classes.circleLeft}></div>
          <div className={classes.circleRight}></div>

            <Header />
            <main>
              <InputFilter keyupAction={this.getQuery}/>
              {
                this.state.results &&
                <PokemonList pokemons={charResults}/>
              }
            </main>
            <Footer />
          </div>        
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
