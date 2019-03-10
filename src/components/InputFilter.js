import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  widthStyle: {
    margin: `0 ${theme.spacing.unit * 3}px`,
    display: "flex",
    justifyContent: "center"
  },
  textField: {
    width: "100%",
    maxWidth: 700,
    margin: `${theme.spacing.unit * 3}px 0`,
    backgroundColor: "white",
    padding: theme.spacing.unit * 2,
    border: "unset",
    boxShadow: "0 0 10px #666",
    fontSize: 16
  }
});

class InputFilter extends Component {
  render() {
    const { keyupAction, classes } = this.props;

    return (
      <div className={classes.widthStyle}>
        <input
          type="text"
          placeholder="Busca tus pokemons favoritos"
          className={classes.textField}
          onChange={keyupAction}
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


