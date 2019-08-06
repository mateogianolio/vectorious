import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) asin', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.asin(value)), x.asin());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.asin(value)), NDArray.asin(x));
  });
});
