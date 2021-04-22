import { ok } from 'assert';
import { equals } from './equals';
import { tan } from './tan';
import { map } from './map';
import { random } from './random';

describe('(v) tan', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.tan(value)), x.tan()));
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.tan(value)), tan(x)));
  });
});
