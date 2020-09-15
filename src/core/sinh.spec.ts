import { equals } from './equals';
import { sinh } from './sinh';
import { map } from './map';
import { random } from './random';

describe('(v) sinh', () => {
  it('should work as expected', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.sinh(value)), x.sinh());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.sinh(value)), sinh(x));
  });
});
