import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('ceil', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.ceil(value)), x.ceil());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.ceil(value)), NDArray.ceil(x));
  });
});
