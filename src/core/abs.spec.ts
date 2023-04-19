import { ok } from 'assert';
import { equals } from './equals';
import { abs } from './abs';
import { map } from './map';
import { random } from './random';

describe('(v) abs', () => {
  it('should work as expected', () => {
    const x = random(3).scale(-1);
    ok(
      equals(
        map(x, (value: number) => Math.abs(value)),
        x.abs()
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3, 3);
    ok(
      equals(
        map(x, (value: number) => Math.abs(value)),
        abs(x)
      )
    );
  });
});
