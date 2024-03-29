import { ok } from 'assert';
import { equals } from './equals';
import { tanh } from './tanh';
import { map } from './map';
import { random } from './random';

describe('(v) tanh', () => {
  it('should work as expected', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.tanh(value)),
        x.tanh()
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    ok(
      equals(
        map(x, (value: number) => Math.tanh(value)),
        tanh(x)
      )
    );
  });
});
