import {
  deepStrictEqual,
} from 'assert';

import { asin } from './asin';
import { map } from './map';
import { random } from './random';

describe('(v) asin', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.asin(value)), x.asin());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.asin(value)), asin(x));
  });
});
