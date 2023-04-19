import { throws } from 'assert';

import { equilateral } from './equilateral';
import { array } from './array';

describe('(v) equilateral', () => {
  it('should pass if lengths match', () => {
    const f64x = new Float64Array([1, 2, 3, 4]);
    const f64y = new Float64Array([1, 2, 3, 4]);
    const x = array(f64x);
    const y = array(f64y);

    x.equilateral(y);
  });

  it('should throw error if lengths do not match', () => {
    const f64x = new Float64Array([1, 2, 3, 4]);
    const f64y = new Float64Array([1, 2, 3, 4, 5]);
    const x = array(f64x);
    const y = array(f64y);

    throws(() => {
      x.equilateral(y);
    }, Error);
  });

  it('should work as the static equivalent', () => {
    const f64x = new Float64Array([1, 2, 3, 4]);
    const f64y = new Float64Array([1, 2, 3, 4]);
    const x = array(f64x);
    const y = array(f64y);

    equilateral(x, y);
  });
});
