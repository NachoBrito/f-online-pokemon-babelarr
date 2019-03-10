import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    card:{
        backgroundColor: "lightGrey",
    },
    media: {
        height: 100,
        width: 100,
        margin:'0 auto',
        padding: `${theme.spacing.unit * 5}px`,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    idPokemon:{
        padding:`${theme.spacing.unit}px`,
        backgroundColor: "grey",
        width: 70,
        textAlign: "center"
    }
  });

class PokemonCard extends React.Component {
    render() {
        const { name, img, id, types, classes } = this.props;

        return (
                <Card>
                    <div className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title="Imagen de un pokemon" />

                        <Typography gutterBottom component="p" className={classes.idPokemon}>ID/{id}</Typography>
                    </div>
                    
                    <CardContent>
                        <Typography gutterBottom variant="title" component="h2">
                            {name}
                        </Typography>
                    </CardContent>

                    <CardActions component="ul">
                        {types.map((type, index)=>{
                            return (
                                <Chip key={index} component="li" label={type.type.name} className={classes.chip} />
                            );
                        })}
                    </CardActions>
                </Card>
        );
    }
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
  }

export default withStyles(styles)(PokemonCard);
  
