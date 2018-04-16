import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './ImageGallery.css';

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
    return (
      <article>
        <button onClick={this.props.onPrevious}>&lt;</button>
        <TransitionGroup className="image-gallery">
          {
            [this.props.currentImg].map(img => (
              <CSSTransition
                key={img.src}
                timeout={500}
                classNames="fade"
              >
                <figure>
                  <div className="figure-content-wrap">
                    <img src={this.props.currentImg.src} alt={this.props.currentImg.caption} />
                    <figcaption>{this.props.currentImg.caption}</figcaption>
                  </div>
                </figure>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
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
