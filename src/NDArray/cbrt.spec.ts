import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('cbrt', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.cbrt(value)), x.cbrt());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.cbrt(value)), NDArray.cbrt(x));
  });
});
