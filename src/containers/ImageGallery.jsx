import React, { Component, Fragment } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import ImageGallery from '../ImageGallery';

import cat1 from '../img/cat1.jpg';
import cat2 from '../img/cat2.jpg';
import cat3 from '../img/cat3.jpg';
import cat4 from '../img/cat4.jpg';
import dog1 from '../img/dog1.jpg';
import dog2 from '../img/dog2.jpg';
import dog3 from '../img/dog3.jpg';
import dog4 from '../img/dog4.jpg';
import dog5 from '../img/dog5.jpg';
import wide from '../img/wide.jpg';
import tall from '../img/tall.jpg';
import small from '../img/small.jpg';

// TODO include null img and img that 404s?
const images = [
  { src: cat1, caption: 'Hi 😍' },
  { src: cat2, caption: 'ਮੈਂ ਇੱਕ ਵੱਡੇ ਸੈਂਡਵਿੱਚ ਨੂੰ ਚਾਹਵਾਨ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ' },
  { src: cat3, caption: '' },
  { src: cat4, caption: "The most basic way to learn how to play a difficult passage is to build it up two notes at a time, using the chord attack. In our (LH) C G E G example, we start with the first two notes. A two-note chord attack (strictly speaking, an interval attack)! Play these two notes as a perfect interval, bouncing your hand and fingers (5 and 1) together up and down as you did previously with the C E G chord. In order to play these two notes rapidly one after the other, lower both fingers together, but keep the 1 finger slightly above the 5 so that the 5 lands first. It is a rapid two-note rolling interval. Since you are bringing both fingers down at once and only delaying one slightly, you can play them as closely as you wish by decreasing the delay. This is how you slow down from infinite speed!" },
  { src: dog1, caption: '🦂🦀🐞🐌🐝🐗🐬🐊🐋🐳🐟' },
  { src: dog2, caption: 'This is a dog' },
  { src: dog3, caption: 'fdsjfdsjfdsjfdsjfdsjfdsjfdsjfdsjfdsjfdsjfdsjfdsjfsdjfsdjfdsjfdsjfsdjsdfjdsfjdsfjdsfsdjfdsjfssdjdsfjsdfjsdfjsdfjsdfjsdfjsdfs' },
  { src: dog4, caption: 'Dog' },
  { src: dog5, caption: 'Another dog' },
  { src: wide, caption: 'wide img' },
  { src: tall, caption: 'tall img' },
  { src: small, caption: 'small img' },
];

export const isValidPath = (match, images) => {
  const intImgId = parseInt(match.params.imageId, 10);

  if (isNaN(intImgId)) return false;
  if (intImgId < 0) return false;
  if (intImgId >= images.length) return false;

  return true;
}

const ImageGalleryContainer = Cmp => class ImageGalleryContainerCmp extends Component {
  get curId() { return this.props.match.params.imageId; }

  handlePrevious = () => {
    const prev = parseInt(this.curId, 10) - 1;
    this.props.history.push(this.props.location.pathname.replace(/\d+$/, prev < 0 ? images.length - 1 : prev));
  }

  handleNext = () => {
    const next = parseInt(this.curId, 10) + 1;
    this.props.history.push(this.props.location.pathname.replace(/\d+$/, next > images.length - 1 ? 0 : next));
  }

  render() {
    console.log('img gallery container', this.props);

    if (!isValidPath(this.props.match, images)) {
      return <Redirect to={`/images/${parseInt(this.curId, 10) === -1 ? images.length - 1 : 0}`} />;
    }

    return (
      <Fragment>
        <Cmp
          currentImg={images[this.curId]}
          images={images}
          onPrevious={this.handlePrevious}
          onNext={this.handleNext}
          preload
        />
      </Fragment>
    );
  }
};

export default withRouter(ImageGalleryContainer(ImageGallery));
