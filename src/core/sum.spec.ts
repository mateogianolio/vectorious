import {
  deepStrictEqual,
} from 'assert';

import { sum } from './sum';
import { random } from './random';

describe('(v) sum', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(x.reduce((acc: number, value: number) => acc + value, 0), x.sum());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(x.reduce((acc: number, value: number) => acc + value, 0), sum(x));
  });
});
