import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) lu_factor', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: NDArray = new NDArray([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]);
    const ipiv: Int32Array = new Int32Array([2, 2, 3]);

    const [LU, piv] = x.lu_factor();
    deepStrictEqual(ipiv, piv);
    deepStrictEqual(y, LU);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);

    deepStrictEqual(x.copy().lu_factor(), NDArray.lu_factor(x));
  });
});
