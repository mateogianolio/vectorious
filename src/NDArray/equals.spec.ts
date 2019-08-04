import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('equals', () => {
  it('should work as expected', () => {
    strictEqual(true, new NDArray([1, 3, 2]).equals(new NDArray([1, 3, 2])));
    strictEqual(true, new NDArray().equals(new NDArray()));
    strictEqual(false, new NDArray([1, 2, 3]).equals(new NDArray([1, 3, 2])));
  });

  it('should work as the static equivalent', () => {
    strictEqual(true, NDArray.equals(new NDArray([1, 3, 2]), new NDArray([1, 3, 2])));
    strictEqual(true, NDArray.equals(new NDArray(), new NDArray()));
    strictEqual(false, NDArray.equals(new NDArray([1, 2, 3]), new NDArray([1, 3, 2])));
  });
});
