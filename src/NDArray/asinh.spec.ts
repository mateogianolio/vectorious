import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) asinh', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.asinh(value)), x.asinh());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.asinh(value)), NDArray.asinh(x));
  });
});
