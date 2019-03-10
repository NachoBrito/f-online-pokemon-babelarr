import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    txt: {
        textAlign: "center",
        padding: theme.spacing.unit * 2,
        margin: 0
    }
  });

class Footer extends Component {
    render() {
      const { classes } = this.props;
  
      return (
        <footer>
          <Typography gutterBottom component="p" className={classes.txt}>
              Desarrollado por Laura Sánchez Redondo | Adalab © 2019
          </Typography>
        </footer>
      );
    }
  }

Footer.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Footer);
  