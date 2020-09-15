import {
  strictEqual,
} from 'assert';

import { set } from './set';
import { array } from './array';

describe('(v) set', () => {
  it('should set properties as expected', () => {
    const x = array([-1, -1, -1, -1]);

    x.set(0, 0);
    x.set(1, 1);
    x.set(2, 2);
    x.set(3, 3);

    strictEqual(0, x.data[0]);
    strictEqual(1, x.data[1]);
    strictEqual(2, x.data[2]);
    strictEqual(3, x.data[3]);
  });

  it('should work as the static equivalent', () => {
    const x = array([-1, -1, -1, -1]);

    set(x, 0, 0);
    set(x, 1, 1);
    set(x, 2, 2);
    set(x, 3, 3);

    strictEqual(0, x.data[0]);
    strictEqual(1, x.data[1]);
    strictEqual(2, x.data[2]);
    strictEqual(3, x.data[3]);
  });
});
