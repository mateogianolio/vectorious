import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) trunc', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.trunc(value)), x.trunc());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.trunc(value)), NDArray.trunc(x));
  });
});
