import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root:{
    flexGrow: 1,
    maxWidth: 700,
    margin: "0 auto"
  },
  textField: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    backgroundColor: "white",
    boxShadow: "0 0 10px #666",
    textAlign: "center"
  },
});

class InputFilter extends Component {
  render() {
    const { keyupAction, classes } = this.props;

    return (
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <TextField
              placeholder="Busca tus pokemons favoritos"
              className={classes.textField}
              margin="normal"
              onChange={keyupAction}
              fullWidth
            />
          </Grid>
        </Grid>
    );
  }
}

InputFilter.propTypes = {
  keyupAction: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InputFilter);


