import React, { Component, Fragment } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import ImageGallery from '../ImageGallery';

import cat1 from '../img/cat1.jpg';
import cat2 from '../img/cat2.jpg';

const images = [
  { src: cat1, caption: 'Hi 😍' },
  { src: cat2, caption: 'ਮੈਂ ਇੱਕ ਵੱਡੇ ਸੈਂਡਵਿੱਚ ਨੂੰ ਚਾਹਵਾਨ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ' },
];

export const isValidPath = (match, images) => {
  const intImgId = parseInt(match.params.imageId);

  if (isNaN(intImgId)) return false;
  if (intImgId < 0) return false;
  if (intImgId >= images.length) return false;

  return true;
}

const ImageGalleryContainer = Cmp => class ImageGalleryContainerCmp extends Component {
  get curId() { return this.props.match.params.imageId; }

  render() {
    console.log('img gallery container', this.props);

    if (!isValidPath(this.props.match, images)) return <Redirect to="/images/0" />;

    return (
      <Fragment>
        <Cmp
          currentImg={images[this.curId]}
          images={images}
        />
      </Fragment>
    );
  }
};

export default withRouter(ImageGalleryContainer(ImageGallery));
