import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('round', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.round(value)), x.round());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.round(value)), NDArray.round(x));
  });
});
