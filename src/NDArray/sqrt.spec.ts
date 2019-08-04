import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('sqrt', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.sqrt(value)), x.sqrt());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.sqrt(value)), NDArray.sqrt(x));
  });
});
