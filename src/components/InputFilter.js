import React, {Component} from "react";

class InputFilter extends Component {
  render() {
    return (
        <div>
          <input type="text" onKeyUp={this.props.keyupAction} placeholder="Busca tus pokemons favoritos"/>
        </div>
    );
  }
}

export default InputFilter;
