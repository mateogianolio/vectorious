import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('tanh', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.tanh(value)), x.tanh());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.tanh(value)), NDArray.tanh(x));
  });
});
