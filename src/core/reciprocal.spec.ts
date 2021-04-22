import { ok } from 'assert';
import { equals } from './equals';
import { reciprocal } from './reciprocal';
import { map } from './map';
import { random } from './random';

describe('(v) reciprocal', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => 1 / value), x.reciprocal()));
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => 1 / value), reciprocal(x)));
  });
});
