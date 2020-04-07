import {
  deepStrictEqual,
} from 'assert';

import { abs } from './abs';
import { map } from './map';
import { random } from './random';

describe('(v) abs', () => {
  it('should work as expected', () => {
    const x = random(3).scale(-1);

    deepStrictEqual(map(x, (value: number) => Math.abs(value)), x.abs());
  });

  it('should work as the static equivalent', () => {
    const x = random(3, 3);

    deepStrictEqual(map(x, (value: number) => Math.abs(value)), abs(x));
  });
});
