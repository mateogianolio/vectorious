import { equals } from './equals';
import { subtract } from './subtract';
import { array } from './array';

describe('(v) subtract', () => {
  it('should return empty vector if subtracting two empty vectors', () => {
    const x = array();
    const y = array();

    equals(array(), x.subtract(y));
  });

  it('should produce v(-3, -3, -3) from v(1, 2, 3) and v(4, 5, 6)', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);
    const z = array([-3, -3, -3]);

    equals(z, x.subtract(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);
    const z = array([-3, -3, -3]);

    equals(z, subtract(x, y));
  });
});
