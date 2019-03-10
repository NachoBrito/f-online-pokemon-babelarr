import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
   txt: {
       textAlign: "center",
       paddingTop: theme.spacing.unit * 2
   } 
  });

class Header extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <header>
        <Typography gutterBottom variant="title" component="h1" className={classes.txt}>
          Mi Lista de Pokemons
        </Typography>
      </header>
      );
    }
  }

Header.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Header);
  