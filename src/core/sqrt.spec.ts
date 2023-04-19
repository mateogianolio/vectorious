import { ok } from 'assert';
import { equals } from './equals';
import { sqrt } from './sqrt';
import { map } from './map';
import { random } from './random';

describe('(v) sqrt', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.sqrt(value)),
        x.sqrt()
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.sqrt(value)),
        sqrt(x)
      )
    );
  });
});
