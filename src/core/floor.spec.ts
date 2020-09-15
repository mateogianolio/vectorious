import { equals } from './equals';
import { floor } from './floor';
import { map } from './map';
import { random } from './random';

describe('(v) floor', () => {
  it('should work as expected', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.floor(value)), x.floor());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.floor(value)), floor(x));
  });
});
