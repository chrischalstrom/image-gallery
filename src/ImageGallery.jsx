import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  render() {
    console.log('img gallery props', this.props);

    return (
      <article>
        <button onClick={this.props.onPrevious}>&lt;</button>
        <figure>
          <img src={this.props.currentImg.src} />
          <figcaption>{this.props.currentImg.caption}</figcaption>
        </figure>
        <button onClick={this.props.onNext}>&gt;</button>
      </article>
    );
  }
};

const imagePropShape = PropTypes.shape({ src: PropTypes.string, caption: PropTypes.string });

ImageGallery.propTypes = {
  currentImg: imagePropShape.isRequired,
  images: PropTypes.arrayOf(imagePropShape).isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
