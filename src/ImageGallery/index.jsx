import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import cn from 'classnames';

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

  onPrev = () => {
    this.setState({ swipedLeft: true, swipedRight: false }, this.props.onPrev);
  };

  onNext = () => {
    this.setState({ swipedLeft: false, swipedRight: true }, this.props.onNext);
  };

  state = ({ swipedLeft: false, swipedRight: false });

  render() {
    const { currentImg } = this.props;
    const { swipedLeft, swipedRight } = this.state;

    return (
      <article>
        <TransitionGroup className={cn('image-gallery', { 'exit-left': swipedLeft, 'exit-right': swipedRight })}>
          {
            [currentImg].map(img => (
              <CSSTransition
                key={img.src}
                timeout={500}
                classNames="fade"
              >
                <GalleryImage currentImg={currentImg} onNext={this.onNext} onPrev={this.onPrev} />
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
