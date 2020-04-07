import {
  deepStrictEqual,
} from 'assert';

import { cosh } from './cosh';
import { map } from './map';
import { random } from './random';

describe('(v) cosh', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.cosh(value)), x.cosh());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.cosh(value)), cosh(x));
  });
});
