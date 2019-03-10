import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokemonCard from "./PokemonCard";

const styles = theme => ({
    root: {
      flexGrow: 1,
      listStyleType: "none",
      padding: 0,
      maxWidth: 900,
      margin: "0 auto"
    }
  });

class PokemonList extends React.Component {

    render() {
        const { pokemons, classes } = this.props;

        return (
            <Grid container className={classes.root} spacing={16} component="ul">
            {
                pokemons.map(pokemonItem => {
                    return (
                        <Grid item xs={12} sm={4} md={3} key={pokemonItem.id} className={classes.item} component="li">
                            <PokemonCard name={pokemonItem.name} id={pokemonItem.id} img={pokemonItem.sprites.front_default} types={pokemonItem.types}/>   
                        </Grid>
                    );
                }
                ) 
            }
            </Grid>
        );
    }
}


PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(PokemonList);