import {
  deepStrictEqual,
} from 'assert';

import { expm1 } from './expm1';
import { map } from './map';
import { random } from './random';

describe('(v) expm1', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.expm1(value)), x.expm1());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.expm1(value)), expm1(x));
  });
});
