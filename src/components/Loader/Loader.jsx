import React, { Component } from 'react';
import { ClockLoader } from 'react-spinners';
import clsx from 'clsx';

class Loader extends Component {
  render() {
    return (
      <div className={clsx('LoaderOverlay')}>
        <div className={clsx('ClockLoaderWrapper')}>
          <ClockLoader color="#00BFFF" size={80} />
        </div>
      </div>
    );
  }
}

export default Loader;
