import { equals } from './equals';
import { slice } from './slice';
import { array } from './array';

describe('(v) slice', () => {
  it('should work as expected', () => {
    const x = array([-1, -2, 3, 4]);

    equals(array([-1, 3]), x.slice(0, 4, 2));
  });

  it('should work as expected', () => {
    const x = array([-1, -2, 3, 4]);

    equals(array([-2, 3]), x.slice(1, 3));
  });

  it('should work as the static equivalent', () => {
    const x = array([-1, -2, 3, 4]);

    equals(array([-1, 3]), slice(x, 0, 4, 2));
  });
});
