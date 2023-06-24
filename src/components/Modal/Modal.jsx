import React, { Component } from 'react';
import clsx from 'clsx';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleCloseClick = () => {
    this.props.onCloseModal();
  };

  render() {
    const { image } = this.props;

    return (
      <div className={clsx('Overlay')} onClick={this.handleCloseClick}>
        <div className={clsx('Modal')}>
          <img src={image} alt="pic of smth" />
        </div>
      </div>
    );
  }
}

export default Modal;
