import { ok } from 'assert';
import { equals } from './equals';
import { exp } from './exp';
import { map } from './map';
import { random } from './random';

describe('(v) exp', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.exp(value)),
        x.exp()
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.exp(value)),
        exp(x)
      )
    );
  });
});
