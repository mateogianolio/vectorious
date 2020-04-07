import {
  deepStrictEqual,
} from 'assert';

import { cbrt } from './cbrt';
import { map } from './map';
import { random } from './random';

describe('(v) cbrt', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.cbrt(value)), x.cbrt());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.cbrt(value)), cbrt(x));
  });
});
