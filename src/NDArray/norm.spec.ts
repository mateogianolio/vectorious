import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) norm', () => {
  it('should return 0 if empty vector', () => {
    strictEqual(0, new NDArray().norm());
  });

  it('should work as expected', () => {
    strictEqual(4, new NDArray([1, 1, 1, 2, 3]).norm());
  });

  it('should work as the static equivalent', () => {
    strictEqual(4, NDArray.norm(new NDArray([1, 1, 1, 2, 3])));
  });
});
