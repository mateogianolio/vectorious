import {
  deepStrictEqual,
} from 'assert';

import { ceil } from './ceil';
import { map } from './map';
import { random } from './random';

describe('(v) ceil', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.ceil(value)), x.ceil());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.ceil(value)), ceil(x));
  });
});
