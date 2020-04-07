import {
  deepStrictEqual,
} from 'assert';

import { round } from './round';
import { map } from './map';
import { random } from './random';

describe('(v) round', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.round(value)), x.round());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.round(value)), round(x));
  });
});
