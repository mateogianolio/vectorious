import { ok } from 'assert';
import { equals } from './equals';
import { sign } from './sign';
import { map } from './map';
import { random } from './random';

describe('(v) sign', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.sign(value)), x.sign()));
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.sign(value)), sign(x)));
  });
});
