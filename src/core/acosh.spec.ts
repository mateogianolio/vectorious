import { ok } from 'assert';
import { equals } from './equals';
import { acosh } from './acosh';
import { map } from './map';
import { ones } from './ones';
import { random } from './random';

describe('(v) acosh', () => {
  it('should work as expected', () => {
    const x = random(3).add(ones(3));

    ok(
      equals(
        map(x, (value: number) => Math.acosh(value)),
        x.acosh()
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3).add(ones(3));

    ok(
      equals(
        map(x, (value: number) => Math.acosh(value)),
        acosh(x)
      )
    );
  });
});
