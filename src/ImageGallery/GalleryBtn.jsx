import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './GalleryBtn.css';

export default class GalleryBtn extends Component {
  render() {
    const { onClick, prev, next } = this.props;

    return (
      <button
        className={cn('gallery-btn', { 'gallery-btn-prev': prev, 'gallery-btn-next': next })}
        onClick={onClick}
      >
        ☞
      </button>
    );
  }
}

GalleryBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  prev: PropTypes.bool,
  next: PropTypes.bool,
};
