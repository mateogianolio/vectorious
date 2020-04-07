import {
  deepStrictEqual,
} from 'assert';

import { mean } from './mean';
import { random } from './random';

describe('(v) mean', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(x.reduce((acc: number, value: number) => acc + value, 0) / x.length, x.mean());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(x.reduce((acc: number, value: number) => acc + value, 0) / x.length, mean(x));
  });
});
