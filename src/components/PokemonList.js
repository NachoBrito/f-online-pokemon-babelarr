import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokemonCard from "./PokemonCard";

const styles = theme => ({
    widthStyle: {
        margin:  `0 ${theme.spacing.unit * 3}px`,
      },
    root: {
      flexGrow: 1,
    }
  });

class PokemonList extends React.Component {
    render() {
        const { pokemons, classes } = this.props;

        return (
            <div className={classes.widthStyle}>
                <Grid container className={classes.root} spacing={16}>
                {
                    pokemons.map(pokemonItem => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={pokemonItem.id}>
                                <PokemonCard name={pokemonItem.name} id={pokemonItem.id} img={pokemonItem.sprites.front_default} types={pokemonItem.types}/>   
                            </Grid>
                        );
                    }
                    ) 
                }
                </Grid>
            </div>
        );
    }
}


PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(PokemonList);