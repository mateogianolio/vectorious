import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('get', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    strictEqual(x.data[0], x.get(0));
    strictEqual(x.data[1], x.get(1));
    strictEqual(x.data[2], x.get(2));
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([[[-1]], [[-2]], [[3]]]);

    strictEqual(x.data[0], x.get(0, 0, 0));
    strictEqual(x.data[1], x.get(1, 0, 0));
    strictEqual(x.data[2], x.get(2, 0, 0));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    strictEqual(x.data[0], NDArray.get(x, 0));
    strictEqual(x.data[1], NDArray.get(x, 1));
    strictEqual(x.data[2], NDArray.get(x, 2));
  });
});
