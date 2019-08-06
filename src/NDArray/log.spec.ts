import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) log', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.log(value)), x.log());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.log(value)), NDArray.log(x));
  });
});
