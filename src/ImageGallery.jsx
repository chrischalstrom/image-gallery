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

class GalleryImage extends Component {
  render() {
    const { src, caption } = this.props.currentImg;

    return (
      <figure>
        <div className="figure-content-wrap">
          <img src={src} alt={caption} />
          {
            caption &&
              <figcaption title={caption}>
                <div>
                  {caption}
                </div>
              </figcaption>
          }
        </div>
      </figure>
    );
  }
}

export default class ImageGallery extends Component {
  componentDidMount() {
    if (this.props.preload) preload(this.props.images);
  }

  render() {
    const { currentImg } = this.props;

    return (
      <article>
        <button onClick={this.props.onPrevious}>&lt;</button>
        <TransitionGroup className="image-gallery">
          {
            [currentImg].map(img => (
              <CSSTransition
                key={img.src}
                timeout={500}
                classNames="fade"
              >
                <GalleryImage currentImg={currentImg} />
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
