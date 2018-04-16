import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './GalleryImage.css';
import GalleryBtn from './GalleryBtn';

export default class GalleryImage extends Component {
  render() {
    const { src, caption } = this.props.currentImg;
    const { onNext, onPrev } = this.props;

    return (
      <Fragment>
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
        <GalleryBtn prev onClick={onPrev} />
        <GalleryBtn next onClick={onNext} />
      </Fragment>
    );
  }
}

GalleryImage.propTypes = {
  currentImg: PropTypes.shape({ src: PropTypes.string.isRequired, caption: PropTypes.string.isRequired }).isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
