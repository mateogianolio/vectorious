import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) combine', () => {
  it('should return current vector if combined with empty vector', () => {
    deepStrictEqual(new NDArray([1, 2, 3]), new NDArray([1, 2, 3]).combine(new NDArray()));
  });

  it('should work as expected', () => {
    deepStrictEqual(new NDArray([1, 2, 3, 0, 1]), new NDArray([1, 2, 3]).combine(new NDArray([0, 1])));
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual(new NDArray([1, 2, 3, 0, 1]), NDArray.combine(new NDArray([1, 2, 3]), new NDArray([0, 1])));
  });
});
