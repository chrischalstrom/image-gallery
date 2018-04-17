# Image gallery

`yarn build` create assets for deployment
`yarn start` start up dev server
`yarn test` run tests

## ImageGallery Props

```
  currentImg: ({ src: string, caption: string }),
  images: [(src: string, caption: string }),

  onPrev: () => void - function that should be invoked when going to the previous image,
  onNext: () => void - function that should be invoked when going to the next image,

  preload?: bool - optional prop. if true, all images passed in the images array will be preloaded.
```
