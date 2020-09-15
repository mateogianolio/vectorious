import { equals } from './equals';
import { ceil } from './ceil';
import { map } from './map';
import { random } from './random';

describe('(v) ceil', () => {
  it('should work as expected', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.ceil(value)), x.ceil());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.ceil(value)), ceil(x));
  });
});
