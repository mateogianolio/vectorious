import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) cos', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.cos(value)), x.cos());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.cos(value)), NDArray.cos(x));
  });
});
