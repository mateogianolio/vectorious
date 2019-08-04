import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('acosh', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3).add(NDArray.ones(3));

    deepStrictEqual(x.map((value: number) => Math.acosh(value)), x.acosh());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3).add(NDArray.ones(3));

    deepStrictEqual(x.map((value: number) => Math.acosh(value)), NDArray.acosh(x));
  });
});
