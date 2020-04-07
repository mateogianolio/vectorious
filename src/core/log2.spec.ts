import {
  deepStrictEqual,
} from 'assert';

import { log2 } from './log2';
import { map } from './map';
import { random } from './random';

describe('(v) log2', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.log2(value)), x.log2());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.log2(value)), log2(x));
  });
});
