import { ok } from 'assert';
import { equals } from './equals';
import { round } from './round';
import { map } from './map';
import { random } from './random';

describe('(v) round', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.round(value)),
        x.round()
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.round(value)),
        round(x)
      )
    );
  });
});
