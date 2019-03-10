import React, {Component} from "react";
import PropTypes from 'prop-types';

class InputFilter extends Component {
  render() {
    const { keyupAction } = this.props;
    
    return (
        <div>
          <input type="text" onKeyUp={keyupAction} placeholder="Busca tus pokemons favoritos"/>
        </div>
    );
  }
}

InputFilter.propTypes = {
  keyupAction: PropTypes.func.isRequired,
}

export default InputFilter;
