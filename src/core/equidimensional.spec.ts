import { throws } from 'assert';

import { equidimensional } from './equidimensional';
import { array } from './array';

describe('(v) equidimensional', () => {
  it('should pass if shapes match', () => {
    const f64x = new Float64Array([1, 2, 3, 4]);
    const f64y = new Float64Array([1, 2, 3, 4]);
    const x = array(f64x);
    const y = array(f64y);

    x.equidimensional(y);
  });

  it('should throw error if lengths do not match', () => {
    const f64x = new Float64Array([1, 2, 3, 4]);
    const f64y = new Float64Array([1, 2, 3, 4]);
    const x = array(f64x);
    const y = array(f64y, { shape: [2, 2] });

    throws(() => {
      x.equidimensional(y);
    }, Error);
  });

  it('should work as the static equivalent', () => {
    const f64x = new Float64Array([1, 2, 3, 4]);
    const f64y = new Float64Array([1, 2, 3, 4]);
    const x = array(f64x);
    const y = array(f64y);

    equidimensional(x, y);
  });
});
