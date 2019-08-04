import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('cosh', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.cosh(value)), x.cosh());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.cosh(value)), NDArray.cosh(x));
  });
});
