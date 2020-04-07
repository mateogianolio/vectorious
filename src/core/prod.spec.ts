import {
  deepStrictEqual,
} from 'assert';

import { prod } from './prod';
import { random } from './random';

describe('(v) prod', () => {
  it('should work as expected', () => {
    const x = random(3);

    deepStrictEqual(x.reduce((acc: number, value: number) => acc * value, 1), x.prod());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    deepStrictEqual(x.reduce((acc: number, value: number) => acc * value, 1), prod(x));
  });
});
