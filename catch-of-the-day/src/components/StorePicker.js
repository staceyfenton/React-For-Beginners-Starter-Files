import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    // console.log('Going to store');
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  static propTypes = {
    history: PropTypes.object
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" ref={this.myInput} defaultValue={getFunName()} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;