import { strictEqual } from 'assert';

import { angle } from './angle';
import { array } from './array';

describe('(v) angle', () => {
  it('should work as expected', () => {
    const x = array([1, 0]);
    const y = array([0, 1]);

    strictEqual(Math.PI / 2, x.angle(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 0]);
    const y = array([0, 1]);

    strictEqual(Math.PI / 2, angle(x, y));
  });
});
