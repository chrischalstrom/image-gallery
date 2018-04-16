import React, { Component } from 'react';
import PropTypes from 'prop-types';

const preload = images => {
  images.forEach(img => {
    const image = new Image();
    image.src = img.src;
  });
};

export default class ImageGallery extends Component {
  componentDidMount() {
    if (this.props.preload) preload(this.props.images);
  }

  render() {
    console.log('img gallery props', this.props);

    return (
      <article>
        <button onClick={this.props.onPrevious}>&lt;</button>
        <figure>
          <img src={this.props.currentImg.src} alt={this.props.currentImg.caption} />
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
  preload: PropTypes.bool,
};
