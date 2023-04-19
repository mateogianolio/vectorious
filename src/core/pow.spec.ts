import { ok } from 'assert';
import { equals } from './equals';
import { pow } from './pow';
import { map } from './map';
import { random } from './random';

describe('(v) pow', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.pow(value, 2)),
        x.pow(2)
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.pow(value, 2)),
        pow(x, 2)
      )
    );
  });
});
