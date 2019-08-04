import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('magnitude', () => {
  it('should return 0 if empty vector', () => {
    strictEqual(0, new NDArray().magnitude());
  });

  it('should work as expected', () => {
    strictEqual(4, new NDArray([1, 1, 1, 2, 3]).magnitude());
  });

  it('should work as the static equivalent', () => {
    strictEqual(4, NDArray.magnitude(new NDArray([1, 1, 1, 2, 3])));
  });
});
