import { ok } from 'assert';
import { equals } from './equals';
import { log1p } from './log1p';
import { map } from './map';
import { random } from './random';

describe('(v) log1p', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.log1p(value)), x.log1p()));
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.log1p(value)), log1p(x)));
  });
});
