import { isValidPath } from './ImageGallery';

const images = [
  { src: '/a', caption: 'b' },
  { src: '/b', caption: 'c' },
];

describe('Image gallery container', () => {
  describe('isValidPath', () => {
    it('false if no id param', () => {
      expect(isValidPath({
        params: { imageId: undefined },
      }, images)).toBe(false);
    });

    it('false if word id', () => {
      expect(isValidPath({
        params: { imageId: 'a' },
      }, images)).toBe(false);
    });

    it('false if empty string id', () => {
      expect(isValidPath({
        params: { imageId: '' },
      }, images)).toBe(false);
    });

    it('false if negative id', () => {
      expect(isValidPath({
        params: { imageId: '-1' },
      }, images)).toBe(false);
    });

    it('false if id too large', () => {
      expect(isValidPath({
        params: { imageId: '2' },
      }, images)).toBe(false);
    });

    it('true if id is last in set', () => {
      expect(isValidPath({
        params: { imageId: '1' },
      }, images)).toBe(true);
    });

    it('true if id is first in set', () => {
      expect(isValidPath({
        params: { imageId: '1' },
      }, images)).toBe(true);
    });
  });
});
