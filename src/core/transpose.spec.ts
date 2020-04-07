import {
  deepStrictEqual,
} from 'assert';

import { array } from './array';

describe('(v) transpose', () => {
  it('should work as expected', () => {
    const x = array([[1, 2, 3]]);

    deepStrictEqual(x.shape.slice().reverse(), x.copy().T.shape);
    deepStrictEqual(x.strides.slice().reverse(), x.copy().T.strides);
  });

  // it('should work as expected', () => {
  //   const x = array([[1, 2, 3]]);
  //   const y = array([[1], [2], [3]]);

  //   deepStrictEqual(x, y.copy().NDArray);
  //   deepStrictEqual(y, x.copy().NDArray);
  // });

  // it('should work as expected', () => {
  //   const x = array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  //   const y = array([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);

  //   deepStrictEqual(x, y.copy().NDArray);
  //   deepStrictEqual(y, x.copy().NDArray);
  // });

  // it('should work as expected', () => {
  //   const x = random(2, 2);
  //   const y = x.copy().NDArray.NDArray;

  //   deepStrictEqual(x, y);
  // });

  // it('should work as the static equivalent', () => {
  //   const x = array([[1, 1, 1]]);

  //   deepStrictEqual(x.copy().NDArray, transpose(x));
  // });
});
