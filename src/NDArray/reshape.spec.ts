import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) reshape', () => {
  it('should throw error if new shape does not match length', () => {
    const f32: Float32Array = new Float32Array([1, 2, 3, 4]);
    const x: NDArray = new NDArray(f32);

    throws(() => { x.reshape([1, 2]); }, Error);
  });

  it('should be able to create row vector of column vector', () => {
    const f32: Float32Array = new Float32Array([1, 2, 3, 4]);
    const x: NDArray = new NDArray(f32, { shape: [1, 4] });

    deepStrictEqual(x.shape, [1, 4]);
    x.reshape([4, 1]);
    deepStrictEqual(x.shape, [4, 1]);
  });

  it('should work as the static equivalent', () => {
    const f32: Float32Array = new Float32Array([1, 2, 3, 4]);
    const x: NDArray = new NDArray(f32, { shape: [1, 4] });

    deepStrictEqual(x.shape, [1, 4]);
    deepStrictEqual(NDArray.reshape(x, [4, 1]).shape, [4, 1]);
  });
});
