import {
  deepStrictEqual,
} from 'assert';

import { acos } from './acos';
import { map } from './map';
import { random } from './random';

describe('(v) acos', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.acos(value)), x.acos());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(map(x, (value: number) => Math.acos(value)), acos(x));
  });
});
