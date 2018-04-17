import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './index.css';
import GalleryImage from './GalleryImage';

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
    const { currentImg, onNext, onPrev } = this.props;

    return (
      <article>
        <TransitionGroup className="image-gallery">
          {
            [currentImg].map(img => (
              <CSSTransition
                key={img.src}
                timeout={500}
                classNames="fade"
              >
                <GalleryImage currentImg={currentImg} onNext={onNext} onPrev={onPrev} />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </article>
    );
  }
};

const imagePropShape = PropTypes.shape({ src: PropTypes.string, caption: PropTypes.string });

ImageGallery.propTypes = {
  currentImg: imagePropShape.isRequired,
  images: PropTypes.arrayOf(imagePropShape).isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  preload: PropTypes.bool,
};
