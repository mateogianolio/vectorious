import { equals } from './equals';
import { atanh } from './atanh';
import { map } from './map';
import { random } from './random';

describe('(v) atanh', () => {
  it('should work as expected', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.atanh(value)), x.atanh());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.atanh(value)), atanh(x));
  });
});
