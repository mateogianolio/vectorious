import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) exp', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.exp(value)), x.exp());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.exp(value)), NDArray.exp(x));
  });
});
