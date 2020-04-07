import {
  deepStrictEqual,
} from 'assert';

import { cos } from './cos';
import { map } from './map';
import { random } from './random';

describe('(v) cos', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.cos(value)), x.cos());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.cos(value)), cos(x));
  });
});
