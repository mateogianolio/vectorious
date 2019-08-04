import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('atan', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.atan(value)), x.atan());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.atan(value)), NDArray.atan(x));
  });
});
