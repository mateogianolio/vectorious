import { ok } from 'assert';
import { equals } from './equals';
import { asinh } from './asinh';
import { map } from './map';
import { random } from './random';

describe('(v) asinh', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.asinh(value)), x.asinh()));
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(equals(map(x, (value: number) => Math.asinh(value)), asinh(x)));
  });
});
