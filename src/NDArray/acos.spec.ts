import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('acos', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.acos(value)), x.acos());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.acos(value)), NDArray.acos(x));
  });
});
