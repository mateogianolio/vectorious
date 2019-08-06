import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) pow', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.pow(value, 2)), x.pow(2));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.pow(value, 2)), NDArray.pow(x, 2));
  });
});
