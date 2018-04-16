import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import ImageGallery from '../ImageGallery';

import cat1 from '../img/cat1.jpg';
import cat2 from '../img/cat2.jpg';

const images = [
  { src: cat1, caption: 'Hi 😍' },
  { src: cat2, caption: 'ਮੈਂ ਇੱਕ ਵੱਡੇ ਸੈਂਡਵਿੱਚ ਨੂੰ ਚਾਹਵਾਨ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ' },
];

const ImageGalleryContainer = Cmp => class ImageGalleryContainerCmp extends Component {
  get curId() { return this.props.match.params.imageId; }

  render() {
    console.log('img gallery container', this.props);

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
