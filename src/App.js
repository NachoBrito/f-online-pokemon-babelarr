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
      backgroundColor: "#fee444",
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
    backgroundColor: "#e72d32",
    borderRadius: "50%"
  },
  circleRight: {
    position: "fixed",
    width: 150,
    height: 150,
    bottom: -75,
    right: -75,
    backgroundColor: "#e72d32",
    borderRadius: "50%"
  },
  mainContent: {
    margin: "auto",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      maxWidth: 600
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 900
    },
  }
 });

const themeApp = createMuiTheme({
  palette: {
    primary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
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
            <div className={classes.mainContent}>
              <Header />
              <main className={classes.mainContainer}>
                <InputFilter keyupAction={this.getQuery}/>
                {
                  this.state.results &&
                  <PokemonList pokemons={charResults}/>
                }
              </main>
              <Footer />
            </div>
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
