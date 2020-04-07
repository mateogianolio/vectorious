import {
  deepStrictEqual,
} from 'assert';

import { log } from './log';
import { map } from './map';
import { random } from './random';

describe('(v) log', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.log(value)), x.log());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.log(value)), log(x));
  });
});
