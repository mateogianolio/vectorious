import { equals } from './equals';
import { array } from './array';

describe('(v) array', () => {
  it('should work as expected', () => {
    const x = array([0, 0, 0]);

    equals(x, array([0, 0, 0]));
  });

  it('should work as expected in two dimensions', () => {
    const x = array([0, 0]);

    equals(x, array([0, 0]));
  });
});
