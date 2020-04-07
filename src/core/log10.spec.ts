import {
  deepStrictEqual,
} from 'assert';

import { log10 } from './log10';
import { map } from './map';
import { random } from './random';

describe('(v) log10', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.log10(value)), x.log10());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.log10(value)), log10(x));
  });
});
