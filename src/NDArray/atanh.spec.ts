import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) atanh', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.atanh(value)), x.atanh());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.atanh(value)), NDArray.atanh(x));
  });
});
