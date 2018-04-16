import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  render() {
    console.log('img gallery props', this.props);

    return (
      <article>
        <figure>
          <img src={this.props.currentImg.src} />
          <figcaption>{this.props.currentImg.caption}</figcaption>
        </figure>
      </article>
    );
  }
};

const imagePropShape = PropTypes.shape({ src: PropTypes.string, caption: PropTypes.string });

ImageGallery.propTypes = {
  currentImg: imagePropShape,
  images: PropTypes.arrayOf(imagePropShape),
};
