import {
  throws,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) equidimensional', () => {
  it('should pass if shapes match', () => {
    const f32x: Float32Array = new Float32Array([1, 2, 3, 4]);
    const f32y: Float32Array = new Float32Array([1, 2, 3, 4]);
    const x: NDArray = new NDArray(f32x);
    const y: NDArray = new NDArray(f32y);

    x.equidimensional(y);
  });

  it('should throw error if lengths do not match', () => {
    const f32x: Float32Array = new Float32Array([1, 2, 3, 4]);
    const f32y: Float32Array = new Float32Array([1, 2, 3, 4]);
    const x: NDArray = new NDArray(f32x);
    const y: NDArray = new NDArray(f32y, { shape: [2, 2] });

    throws(() => { x.equidimensional(y); }, Error);
  });

  it('should work as the static equivalent', () => {
    const f32x: Float32Array = new Float32Array([1, 2, 3, 4]);
    const f32y: Float32Array = new Float32Array([1, 2, 3, 4]);
    const x: NDArray = new NDArray(f32x);
    const y: NDArray = new NDArray(f32y);

    NDArray.equidimensional(x, y);
  });
});
