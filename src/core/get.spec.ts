import { strictEqual } from 'assert';

import { get } from './get';
import { array } from './array';
import { random } from './random';

describe('(v) get', () => {
  it('should work as expected', () => {
    const x = random(3);

    strictEqual(x.data[0], x.get(0));
    strictEqual(x.data[1], x.get(1));
    strictEqual(x.data[2], x.get(2));
  });

  it('should work with ndim=0', () => {
    const x = array([13]).reshape();
    strictEqual(13, x.get());
  });


  it('should work as expected', () => {
    const x = array([[[-1]], [[-2]], [[3]]]);

    strictEqual(x.data[0], x.get(0, 0, 0));
    strictEqual(x.data[1], x.get(1, 0, 0));
    strictEqual(x.data[2], x.get(2, 0, 0));
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    strictEqual(x.data[0], get(x, 0));
    strictEqual(x.data[1], get(x, 1));
    strictEqual(x.data[2], get(x, 2));
  });
});
