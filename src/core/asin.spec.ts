import { ok } from 'assert';
import { equals } from './equals';
import { asin } from './asin';
import { map } from './map';
import { random } from './random';

describe('(v) asin', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.asin(value)),
        x.asin()
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.asin(value)),
        asin(x)
      )
    );
  });
});
