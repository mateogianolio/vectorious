import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('sin', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.sin(value)), x.sin());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.sin(value)), NDArray.sin(x));
  });
});
