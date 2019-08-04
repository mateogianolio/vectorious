import {
  throws,
} from 'assert';

import { NDArray } from '.';

describe('equilateral', () => {
  it('should pass if lengths match', () => {
    const f32x: Float32Array = new Float32Array([1, 2, 3, 4]);
    const f32y: Float32Array = new Float32Array([1, 2, 3, 4]);
    const x: NDArray = new NDArray(f32x);
    const y: NDArray = new NDArray(f32y);

    x.equilateral(y);
  });

  it('should throw error if lengths do not match', () => {
    const f32x: Float32Array = new Float32Array([1, 2, 3, 4]);
    const f32y: Float32Array = new Float32Array([1, 2, 3, 4, 5]);
    const x: NDArray = new NDArray(f32x);
    const y: NDArray = new NDArray(f32y);

    throws(() => { x.equilateral(y); }, Error);
  });

  it('should work as the static equivalent', () => {
    const f32x: Float32Array = new Float32Array([1, 2, 3, 4]);
    const f32y: Float32Array = new Float32Array([1, 2, 3, 4]);
    const x: NDArray = new NDArray(f32x);
    const y: NDArray = new NDArray(f32y);

    NDArray.equilateral(x, y);
  });
});
