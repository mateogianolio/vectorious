import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) log10', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.log10(value)), x.log10());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.log10(value)), NDArray.log10(x));
  });
});
