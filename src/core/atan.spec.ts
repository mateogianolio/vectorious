import { ok } from 'assert';
import { equals } from './equals';
import { atan } from './atan';
import { map } from './map';
import { random } from './random';

describe('(v) atan', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.atan(value)), x.atan()));
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.atan(value)), atan(x)));
  });
});
