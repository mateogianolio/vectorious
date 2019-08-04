import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('sinh', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.sinh(value)), x.sinh());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.sinh(value)), NDArray.sinh(x));
  });
});
