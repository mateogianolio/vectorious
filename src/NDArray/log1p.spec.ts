import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) log1p', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.log1p(value)), x.log1p());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.log1p(value)), NDArray.log1p(x));
  });
});
