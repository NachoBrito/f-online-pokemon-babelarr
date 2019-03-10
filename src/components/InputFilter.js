import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  widthStyle: {
    margin:  `0 ${theme.spacing.unit * 3}px`,
    display: "flex",
    justifyContent: "center"
  },
  textField: {
    maxWidth: 700,
    padding: theme.spacing.unit,
    backgroundColor: "white",
    boxShadow: "0 0 10px #666"
    }
});

class InputFilter extends Component {
  render() {
    const { keyupAction, classes } = this.props;

    return (
      <div className={classes.widthStyle}>
        <TextField
          placeholder="Busca tus pokemons favoritos"
          className={classes.textField}
          margin="normal"
          onChange={keyupAction}
          fullWidth
        />
      </div>
    );
  }
}

InputFilter.propTypes = {
  keyupAction: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InputFilter);


