import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('sign', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.sign(value)), x.sign());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.sign(value)), NDArray.sign(x));
  });
});
