import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) matrix', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray(new Float32Array([0, 0, 0]), { shape: [3, 1] });

    deepStrictEqual(x, NDArray.matrix(3, 1));
  });

  it('should work as expected in two dimensions', () => {
    const x: NDArray = new NDArray([[0, 0], [0, 0]]);

    deepStrictEqual(x, NDArray.matrix(2, 2));
  });
});
