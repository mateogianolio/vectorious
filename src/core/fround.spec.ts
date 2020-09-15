import { equals } from './equals';
import { fround } from './fround';
import { map } from './map';
import { random } from './random';

describe('(v) fround', () => {
  it('should work as expected', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.fround(value)), x.fround());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.fround(value)), fround(x));
  });
});
