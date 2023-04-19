import { ok } from 'assert';
import { equals } from './equals';
import { cosh } from './cosh';
import { map } from './map';
import { random } from './random';

describe('(v) cosh', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.cosh(value)),
        x.cosh()
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.cosh(value)),
        cosh(x)
      )
    );
  });
});
