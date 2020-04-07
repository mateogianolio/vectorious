import {
  deepStrictEqual,
} from 'assert';

import { scale } from './scale';
import { array } from './array';

describe('(v) scale', () => {
  it('should scale v(1, 2, 3) by 2 to v(2, 4, 6)', () => {
    const x = array([1, 2, 3]);
    const y = array([2, 4, 6]);

    deepStrictEqual(y, x.scale(2));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([2, 4, 6]);

    deepStrictEqual(y, scale(x, 2));
  });
});
