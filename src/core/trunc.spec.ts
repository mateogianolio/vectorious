import { equals } from './equals';
import { trunc } from './trunc';
import { map } from './map';
import { random } from './random';

describe('(v) trunc', () => {
  it('should work as expected', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.trunc(value)), x.trunc());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.trunc(value)), trunc(x));
  });
});
