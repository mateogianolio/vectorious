import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) expm1', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.expm1(value)), x.expm1());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.expm1(value)), NDArray.expm1(x));
  });
});
