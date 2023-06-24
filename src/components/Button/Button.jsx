import clsx from 'clsx';
import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button
        className={clsx('Button')}
        type="button"
        onClick={this.handleClick}
      >
        Load more
      </button>
    );
  }
}

export default Button;
