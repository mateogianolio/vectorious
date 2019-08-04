import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('tan', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.tan(value)), x.tan());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.tan(value)), NDArray.tan(x));
  });
});
