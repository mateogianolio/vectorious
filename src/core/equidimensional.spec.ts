import {
  throws,
} from 'assert';

import { equidimensional } from './equidimensional';
import { array } from './array';

describe('(v) equidimensional', () => {
  it('should pass if shapes match', () => {
    const f32x = new Float64Array([1, 2, 3, 4]);
    const f32y = new Float64Array([1, 2, 3, 4]);
    const x = array(f32x);
    const y = array(f32y);

    x.equidimensional(y);
  });

  it('should throw error if lengths do not match', () => {
    const f32x = new Float64Array([1, 2, 3, 4]);
    const f32y = new Float64Array([1, 2, 3, 4]);
    const x = array(f32x);
    const y = array(f32y, { shape: [2, 2] });

    throws(() => { x.equidimensional(y); }, Error);
  });

  it('should work as the static equivalent', () => {
    const f32x = new Float64Array([1, 2, 3, 4]);
    const f32y = new Float64Array([1, 2, 3, 4]);
    const x = array(f32x);
    const y = array(f32y);

    equidimensional(x, y);
  });
});
